import mongoose from 'mongoose'

const BatchSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, trim: true },
  title: { type: String, required: true },
  wing: { type: String, index: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  schedule: [{
    day: String,
    start: String,
    end: String,
    label: String,
    meetUrl: String,
  }],
  mode: { type: String, enum: ['live', 'recorded', 'hybrid'], default: 'hybrid' },
  isActive: { type: Boolean, default: true },
}, { timestamps: true })

BatchSchema.index({ wing: 1, isActive: 1 })

export default mongoose.models.Batch || mongoose.model('Batch', BatchSchema)
