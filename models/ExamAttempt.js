import mongoose from 'mongoose'

const ExamAttemptSchema = new mongoose.Schema({
  exam: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true, index: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  answers: [{ questionId: mongoose.Schema.Types.ObjectId, selectedIndex: Number }],
  score: { type: Number, default: 0 },
  maxScore: { type: Number, default: 0 },
  rankSnapshot: Number,
  startedAt: { type: Date, default: Date.now },
  submittedAt: Date,
  status: { type: String, enum: ['in_progress', 'submitted', 'graded'], default: 'in_progress' },
}, { timestamps: true })

ExamAttemptSchema.index({ exam: 1, user: 1, createdAt: -1 })

export default mongoose.models.ExamAttempt || mongoose.model('ExamAttempt', ExamAttemptSchema)
