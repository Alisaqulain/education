import mongoose from 'mongoose'

const QuestionSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  options: [{ type: String }],
  correctIndex: Number,
  marks: { type: Number, default: 1 },
  negativeMarks: { type: Number, default: 0 },
}, { _id: true })

const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true, sparse: true, trim: true },
  description: String,
  wing: String,
  durationMinutes: { type: Number, default: 60 },
  totalMarks: { type: Number, default: 0 },
  negativeMarking: { type: Boolean, default: false },
  questions: [QuestionSchema],
  status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true })

ExamSchema.index({ status: 1, wing: 1 })

export default mongoose.models.Exam || mongoose.model('Exam', ExamSchema)
