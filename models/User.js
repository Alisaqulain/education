import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: function() {
      return !this.googleId // Password required if not Google auth
    },
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    required: true,
    default: 'student',
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  avatar: {
    type: String,
    default: '',
  },
  googleId: {
    type: String,
    default: null,
  },
  
  // Student-specific fields
  studentInfo: {
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    completedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    dateOfBirth: Date,
    grade: String,
    interests: [String],
  },
  
  // Teacher-specific fields
  teacherInfo: {
    subjects: [String],
    qualifications: [{
      degree: String,
      institution: String,
      year: Number,
    }],
    experience: {
      years: Number,
      description: String,
    },
    hourlyRate: {
      type: Number,
      default: 0,
    },
    bio: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    rating: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
    totalStudents: { type: Number, default: 0 },
    totalCourses: { type: Number, default: 0 },
    availability: {
      timezone: String,
      schedule: [{
        day: String,
        slots: [{
          start: String,
          end: String,
        }],
      }],
    },
  },
  
  // Common fields
  isActive: {
    type: Boolean,
    default: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  verificationToken: String,
  
}, {
  timestamps: true,
})

// Indexes
UserSchema.index({ email: 1 })
UserSchema.index({ role: 1 })
UserSchema.index({ 'teacherInfo.isApproved': 1 })
UserSchema.index({ googleId: 1 })

export default mongoose.models.User || mongoose.model('User', UserSchema)

