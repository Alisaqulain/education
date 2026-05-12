import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import crypto from 'crypto'

/** Placeholder: wire to SendGrid/Resend. Stores token hash on user for reset flow. */
export async function POST(request) {
  try {
    const { email } = await request.json()
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }
    await connectDB()
    const user = await User.findOne({ email: email.toLowerCase().trim() })
    if (!user) {
      return NextResponse.json({ ok: true, message: 'If an account exists, reset instructions will be sent.' })
    }
    const raw = crypto.randomBytes(32).toString('hex')
    user.resetPasswordToken = crypto.createHash('sha256').update(raw).digest('hex')
    user.resetPasswordExpires = new Date(Date.now() + 1000 * 60 * 60) // 1h
    await user.save()
    // In production: await sendEmail({ to: user.email, link: `${SITE.url}/reset-password?token=${raw}` })
    return NextResponse.json({
      ok: true,
      message: 'If an account exists, reset instructions will be sent.',
      _devToken: process.env.NODE_ENV !== 'production' ? raw : undefined,
    })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Unable to process request' }, { status: 500 })
  }
}
