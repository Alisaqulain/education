// Script to create admin account
// Run with: node scripts/create-admin.js

require('dotenv').config({ path: '.env.local' })
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in .env.local')
  process.exit(1)
}

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher', 'admin'], required: true, default: 'student' },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  phone: { type: String, trim: true },
  avatar: { type: String, default: '' },
  googleId: { type: String, default: null },
  studentInfo: { type: mongoose.Schema.Types.Mixed },
  teacherInfo: { type: mongoose.Schema.Types.Mixed },
  isActive: { type: Boolean, default: true },
  emailVerified: { type: Boolean, default: true },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  verificationToken: String,
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model('User', UserSchema)

async function createAdmin() {
  try {
    console.log('🔌 Connecting to MongoDB...')
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Connected to MongoDB\n')

    const email = 'Edgen@gmail.com'
    const password = 'Edgen@9876'
    const firstName = 'Edgen'
    const lastName = 'Admin'

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email })
    if (existingAdmin) {
      console.log('⚠️  Admin account already exists!')
      console.log(`   Email: ${existingAdmin.email}`)
      console.log(`   Role: ${existingAdmin.role}`)
      
      // Update to admin if not already
      if (existingAdmin.role !== 'admin') {
        existingAdmin.role = 'admin'
        await existingAdmin.save()
        console.log('✅ Updated existing account to admin role')
      }
      
      // Update password
      const hashedPassword = await bcrypt.hash(password, 12)
      existingAdmin.password = hashedPassword
      existingAdmin.emailVerified = true
      existingAdmin.isActive = true
      await existingAdmin.save()
      console.log('✅ Password updated')
      
      await mongoose.disconnect()
      return
    }

    // Hash password
    console.log('🔐 Hashing password...')
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create admin user
    console.log('👤 Creating admin account...')
    const admin = await User.create({
      email,
      password: hashedPassword,
      role: 'admin',
      firstName,
      lastName,
      emailVerified: true,
      isActive: true,
    })

    console.log('\n✅ Admin account created successfully!')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('📧 Email:', admin.email)
    console.log('👤 Name:', `${admin.firstName} ${admin.lastName}`)
    console.log('🔑 Role:', admin.role)
    console.log('🆔 User ID:', admin._id)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    await mongoose.disconnect()
    console.log('✅ Disconnected from MongoDB')
    
  } catch (error) {
    console.error('\n❌ Error creating admin account:')
    console.error(error.message)
    
    if (error.code === 11000) {
      console.error('\n💡 Admin account may already exist. Try running the script again or check your database.')
    }
    
    await mongoose.disconnect()
    process.exit(1)
  }
}

createAdmin()




