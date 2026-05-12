import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import crypto from 'crypto'
import { hashPassword } from '@/lib/auth'

export async function POST(request) {
  try {
    const { token, password } = await request.json()
    if (!token || !password || password.length < 6) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }
    const hashed = crypto.createHash('sha256').update(token).digest('hex')
    await connectDB()
    const user = await User.findOne({
      resetPasswordToken: hashed,
      resetPasswordExpires: { $gt: new Date() },
    })
    if (!user) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
    }
    user.password = await hashPassword(password)
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined
    await user.save()
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Unable to reset password' }, { status: 500 })
  }
}
