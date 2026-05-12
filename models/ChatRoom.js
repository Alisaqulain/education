import mongoose from 'mongoose'

const ChatRoomSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, unique: true, sparse: true, trim: true },
  type: {
    type: String,
    enum: ['dm', 'batch', 'channel', 'announcement', 'doubt'],
    default: 'channel',
    index: true,
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  batch: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  isPrivate: { type: Boolean, default: false },
  lastMessageAt: Date,
}, { timestamps: true })

ChatRoomSchema.index({ type: 1, lastMessageAt: -1 })

export default mongoose.models.ChatRoom || mongoose.model('ChatRoom', ChatRoomSchema)
