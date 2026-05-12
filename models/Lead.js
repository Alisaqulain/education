import mongoose from 'mongoose'

const LeadSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['admission', 'demo', 'contact', 'teacher', 'scholarship', 'franchise'],
    required: true,
    index: true,
  },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, trim: true, default: '' },
  message: { type: String, default: '' },
  /** program slug or interest area */
  program: { type: String, default: '' },
  meta: { type: mongoose.Schema.Types.Mixed, default: {} },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'closed'],
    default: 'new',
    index: true,
  },
}, { timestamps: true })

LeadSchema.index({ createdAt: -1 })

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema)
