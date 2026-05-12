import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Lead from '@/models/Lead'

const ALLOWED = ['admission', 'demo', 'contact', 'teacher', 'scholarship', 'franchise']

export async function POST(request) {
  try {
    const body = await request.json()
    const type = body.type || 'contact'
    if (!ALLOWED.includes(type)) {
      return NextResponse.json({ error: 'Invalid submission type' }, { status: 400 })
    }
    const name = (body.name || '').trim()
    const email = (body.email || '').trim()
    const phone = (body.phone || '').trim()
    const message = (body.message || '').trim()
    const program = (body.program || '').trim()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    await connectDB()
    await Lead.create({
      type,
      name,
      email,
      phone,
      message,
      program,
      meta: typeof body.meta === 'object' && body.meta ? body.meta : {},
    })

    return NextResponse.json({ ok: true, message: 'Thank you — our team will reach out shortly.' })
  } catch (e) {
    console.error('Lead create error:', e)
    return NextResponse.json({ error: 'Unable to save inquiry. Please try again.' }, { status: 500 })
  }
}
