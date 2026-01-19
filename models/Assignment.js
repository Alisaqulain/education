import mongoose from 'mongoose'

const SubmissionSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  files: [{
    name: String,
    url: String,
    type: String,
  }],
  textAnswer: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  grade: {
    score: Number,
    feedback: String,
    gradedAt: Date,
    gradedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  status: {
    type: String,
    enum: ['submitted', 'graded', 'returned'],
    default: 'submitted',
  },
}, { timestamps: true })

const AssignmentSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructions: String,
  dueDate: {
    type: Date,
    required: true,
  },
  maxScore: {
    type: Number,
    default: 100,
  },
  attachments: [{
    name: String,
    url: String,
    type: String,
  }],
  submissions: [SubmissionSchema],
  assignedTo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
})

AssignmentSchema.index({ course: 1 })
AssignmentSchema.index({ teacher: 1 })
AssignmentSchema.index({ dueDate: 1 })

export default mongoose.models.Assignment || mongoose.model('Assignment', AssignmentSchema)




