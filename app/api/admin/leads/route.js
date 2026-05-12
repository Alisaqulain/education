import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Lead from '@/models/Lead'
import { getAuthToken, verifyToken } from '@/lib/auth'

export async function GET(request) {
  try {
    await connectDB()
    const token = getAuthToken({ headers: request.headers, cookies: request.cookies })
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const decoded = verifyToken(token)
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const type = searchParams.get('type')
    const q = {}
    if (status) q.status = status
    if (type) q.type = type
    const leads = await Lead.find(q).sort({ createdAt: -1 }).limit(200).lean()
    return NextResponse.json({ leads })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
