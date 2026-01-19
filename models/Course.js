import mongoose from 'mongoose'

const LessonSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  duration: Number, // in minutes
  resources: [{
    type: { type: String }, // 'pdf', 'link', 'document'
    title: String,
    url: String,
  }],
  order: Number,
}, { timestamps: true })

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  currency: {
    type: String,
    default: 'USD',
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner',
  },
  language: {
    type: String,
    default: 'English',
  },
  lessons: [LessonSchema],
  duration: {
    type: Number, // total hours
    default: 0,
  },
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  totalEnrollments: {
    type: Number,
    default: 0,
  },
  rating: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
  },
  reviews: [{
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
    createdAt: { type: Date, default: Date.now },
  }],
  status: {
    type: String,
    enum: ['draft', 'pending', 'approved', 'rejected', 'published'],
    default: 'draft',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  tags: [String],
  requirements: [String],
  whatYouWillLearn: [String],
}, {
  timestamps: true,
})

CourseSchema.index({ teacher: 1 })
CourseSchema.index({ subject: 1 })
CourseSchema.index({ category: 1 })
CourseSchema.index({ status: 1 })
CourseSchema.index({ 'rating.average': -1 })

export default mongoose.models.Course || mongoose.model('Course', CourseSchema)




