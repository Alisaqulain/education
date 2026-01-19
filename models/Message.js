import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  conversationId: {
    type: String,
    required: true,
    index: true,
  },
  content: {
    type: String,
    required: true,
  },
  attachments: [{
    name: String,
    url: String,
    type: String,
  }],
  isRead: {
    type: Boolean,
    default: false,
  },
  readAt: Date,
  relatedCourse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  relatedBooking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
  },
}, {
  timestamps: true,
})

MessageSchema.index({ conversationId: 1, createdAt: -1 })
MessageSchema.index({ sender: 1, recipient: 1 })
MessageSchema.index({ isRead: 1 })

export default mongoose.models.Message || mongoose.model('Message', MessageSchema)




