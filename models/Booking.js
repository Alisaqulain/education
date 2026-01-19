import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  sessionType: {
    type: String,
    enum: ['trial', 'regular', 'course'],
    default: 'regular',
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // in minutes
    required: true,
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled', 'no_show'],
    default: 'scheduled',
  },
  meetingLink: String,
  notes: String,
  cancelledBy: {
    type: String,
    enum: ['student', 'teacher'],
  },
  cancellationReason: String,
  amount: Number,
  payment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment',
  },
}, {
  timestamps: true,
})

BookingSchema.index({ student: 1 })
BookingSchema.index({ teacher: 1 })
BookingSchema.index({ date: 1 })
BookingSchema.index({ status: 1 })

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema)




