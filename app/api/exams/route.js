import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Exam from '@/models/Exam'

export async function GET() {
  try {
    await connectDB()
    const exams = await Exam.find({ status: 'published' }).select('title slug durationMinutes wing').limit(50).lean()
    return NextResponse.json({ exams })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ exams: [], message: 'Exam service warming up' })
  }
}
