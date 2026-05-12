import mongoose from 'mongoose'

const CouponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, uppercase: true, trim: true },
  percentOff: { type: Number, min: 0, max: 100 },
  amountOff: { type: Number, min: 0 },
  validFrom: Date,
  validUntil: Date,
  maxRedemptions: { type: Number, default: 1000 },
  redemptionCount: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true })

export default mongoose.models.Coupon || mongoose.model('Coupon', CouponSchema)
