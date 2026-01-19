import mongoose from 'mongoose'

const NotificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: [
      'course_enrolled',
      'assignment_due',
      'assignment_graded',
      'booking_confirmed',
      'booking_cancelled',
      'message_received',
      'payment_received',
      'course_approved',
      'course_rejected',
      'teacher_approved',
      'system',
    ],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  link: String,
  isRead: {
    type: Boolean,
    default: false,
  },
  readAt: Date,
  metadata: mongoose.Schema.Types.Mixed,
}, {
  timestamps: true,
})

NotificationSchema.index({ user: 1, isRead: 1 })
NotificationSchema.index({ user: 1, createdAt: -1 })

export default mongoose.models.Notification || mongoose.model('Notification', NotificationSchema)




