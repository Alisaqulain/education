import mongoose from 'mongoose'

const PaymentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: 'USD',
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'paypal', 'bank_transfer', 'other'],
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'failed', 'refunded'],
    default: 'pending',
  },
  paymentProvider: {
    type: String,
    enum: ['stripe', 'paypal', 'manual'],
    default: 'stripe',
  },
  providerTransactionId: String,
  invoiceUrl: String,
  receiptUrl: String,
  refundReason: String,
  refundedAt: Date,
  metadata: mongoose.Schema.Types.Mixed,
}, {
  timestamps: true,
})

PaymentSchema.index({ student: 1 })
PaymentSchema.index({ course: 1 })
PaymentSchema.index({ transactionId: 1 })
PaymentSchema.index({ status: 1 })
PaymentSchema.index({ createdAt: -1 })

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema)




