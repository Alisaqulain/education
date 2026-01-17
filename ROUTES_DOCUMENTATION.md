# Edgen Institute - Complete Routes Documentation

**Domain:** https://education-three-sage.vercel.app

**Last Updated:** January 2024

---

## 📋 Table of Contents

1. [Public Pages](#public-pages)
2. [Student Pages](#student-pages)
3. [Teacher Pages](#teacher-pages)
4. [Admin Pages](#admin-pages)
5. [Legal & Policy Pages](#legal--policy-pages)
6. [API Routes (Future)](#api-routes-future)

---

## 🌐 Public Pages

### Home & Navigation

| Route | Description | Component |
|-------|-------------|-----------|
| `/` | Homepage with hero, search, language tutors, subjects, trust features, how it works, testimonials | `app/page.js` |
| `/about` | About Us page with company story, vision, mission, core values, ownership disclosure | `app/about/page.js` |
| `/how-it-works` | How the platform works for both students and teachers | `app/how-it-works/page.js` |
| `/contact` | Contact page with email addresses and working contact form | `app/contact/page.js` |

### Exploration Pages

| Route | Description | Component |
|-------|-------------|-----------|
| `/subjects` | Browse all available subjects with categories | `app/subjects/page.js` |
| `/courses` | Browse courses (Coming Soon section) | `app/courses/page.js` |
| `/teachers` | Explore teachers directory (Coming Soon) | `app/teachers/page.js` |
| `/pricing` | Transparent pricing information | `app/pricing/page.js` |

### Authentication & Registration

| Route | Description | Component |
|-------|-------------|-----------|
| `/signup` | Universal signup page (Student/Teacher toggle) with Google auth | `app/signup/page.js` |
| `/student-register` | Student registration with working form and Google auth | `app/student-register/page.js` |
| `/register` | Teacher registration with multi-step form (3 steps) | `app/register/page.js` |

---

## 👩‍🎓 Student Pages

### Authentication

| Route | Description | Component |
|-------|-------------|-----------|
| `/student/login` | Student login with Google auth and forgot password | `app/student/login/page.js` |

### Dashboard & Profile

| Route | Description | Component |
|-------|-------------|-----------|
| `/student/dashboard` | Student dashboard with overview cards | `app/student/dashboard/page.js` |
| `/student/profile` | Student profile management | `app/student/profile/page.js` |
| `/student/settings` | Student settings (profile, notifications, privacy, billing) | `app/student/settings/page.js` |

### Learning

| Route | Description | Component |
|-------|-------------|-----------|
| `/student/my-courses` | View enrolled courses with progress tracking | `app/student/my-courses/page.js` |
| `/student/courses/[id]` | Individual course page (to be created) | - |
| `/student/assignments` | View and submit assignments | `app/student/assignments/page.js` |
| `/student/assignments/[id]` | Assignment details page (to be created) | - |
| `/student/assignments/[id]/submit` | Submit assignment page (to be created) | - |

### Bookings & Communication

| Route | Description | Component |
|-------|-------------|-----------|
| `/student/bookings` | View scheduled sessions and booking history | `app/student/bookings/page.js` |
| `/student/messages` | Messaging system with teachers | `app/student/messages/page.js` |
| `/student/wishlist` | Saved teachers and courses | `app/student/wishlist/page.js` |

### Payments & Billing

| Route | Description | Component |
|-------|-------------|-----------|
| `/student/payments` | Payment history, methods, and invoices | `app/student/payments/page.js` |
| `/student/payments/checkout` | Course checkout page with payment integration | `app/student/payments/checkout/page.js` |
| `/student/payments/[id]` | Payment transaction details (to be created) | - |

### Notifications

| Route | Description | Component |
|-------|-------------|-----------|
| `/student/notifications` | View all notifications | `app/student/notifications/page.js` |

---

## 👨‍🏫 Teacher Pages

### Authentication

| Route | Description | Component |
|-------|-------------|-----------|
| `/teacher/login` | Teacher login with Google auth and forgot password | `app/teacher/login/page.js` |

### Dashboard & Profile

| Route | Description | Component |
|-------|-------------|-----------|
| `/teacher/dashboard` | Teacher dashboard with stats and quick actions | `app/teacher/dashboard/page.js` |
| `/teacher/profile` | Teacher profile management | `app/teacher/profile/page.js` |
| `/teacher/settings` | Teacher settings (to be created) | - |

### Students & Courses

| Route | Description | Component |
|-------|-------------|-----------|
| `/teacher/my-students` | Manage students, view progress, communicate | `app/teacher/my-students/page.js` |
| `/teacher/students/[id]` | Individual student profile (to be created) | - |
| `/teacher/create-course` | Create new course with form | `app/teacher/create-course/page.js` |
| `/teacher/courses` | Manage all courses (to be created) | - |
| `/teacher/courses/[id]` | Edit course page (to be created) | - |

### Teaching

| Route | Description | Component |
|-------|-------------|-----------|
| `/teacher/availability` | Set teaching schedule and availability | `app/teacher/availability/page.js` |
| `/teacher/assignments` | Create and grade assignments (to be created) | - |

### Financial

| Route | Description | Component |
|-------|-------------|-----------|
| `/teacher/earnings` | View earnings, payout history, and analytics | `app/teacher/earnings/page.js` |
| `/teacher/analytics` | Teaching analytics and performance metrics | `app/teacher/analytics/page.js` |

### Communication

| Route | Description | Component |
|-------|-------------|-----------|
| `/teacher/messages` | Messaging system with students | `app/teacher/messages/page.js` |

---

## 🛡️ Admin Pages

### Authentication

| Route | Description | Component |
|-------|-------------|-----------|
| `/admin/login` | Admin login portal | `app/admin/login/page.js` |

### Dashboard

| Route | Description | Component |
|-------|-------------|-----------|
| `/admin/dashboard` | Admin dashboard with platform overview | `app/admin/dashboard/page.js` |
| `/admin/analytics` | Platform-wide analytics and metrics | `app/admin/analytics/page.js` |

### User Management

| Route | Description | Component |
|-------|-------------|-----------|
| `/admin/teachers` | Manage all teachers, verify, approve/reject | `app/admin/teachers/page.js` |
| `/admin/students` | Manage all students, view activity | `app/admin/students/page.js` |
| `/admin/users/[id]` | Individual user management (to be created) | - |

### Content Management

| Route | Description | Component |
|-------|-------------|-----------|
| `/admin/courses` | Approve/reject courses, manage catalog | `app/admin/courses/page.js` |
| `/admin/subjects` | Manage subject categories | `app/admin/subjects/page.js` |

### Reports & Settings

| Route | Description | Component |
|-------|-------------|-----------|
| `/admin/reports` | Generate reports, view statistics | `app/admin/reports/page.js` |
| `/admin/settings` | Platform configuration and settings | `app/admin/settings/page.js` |

---

## ⚖️ Legal & Policy Pages

| Route | Description | Component |
|-------|-------------|-----------|
| `/legal/terms-and-conditions` | Terms and Conditions with Bizsun Creative ownership | `app/legal/terms-and-conditions/page.js` |
| `/legal/privacy-policy` | Privacy Policy (GDPR/CCPA compliant) | `app/legal/privacy-policy/page.js` |
| `/legal/refund-cancellation` | Refund and Cancellation Policy | `app/legal/refund-cancellation/page.js` |
| `/legal/cookie-policy` | Cookie Policy | `app/legal/cookie-policy/page.js` |
| `/legal/disclaimer` | Platform Disclaimer | `app/legal/disclaimer/page.js` |

---

## 🔌 API Routes (Future - Backend Ready)

These routes are prepared for backend integration:

| Route | Method | Description |
|-------|--------|-------------|
| `/api/auth/login` | POST | User authentication |
| `/api/auth/register` | POST | User registration |
| `/api/auth/google` | POST | Google OAuth |
| `/api/auth/forgot-password` | POST | Password reset request |
| `/api/auth/reset-password` | POST | Password reset |
| `/api/courses` | GET | List courses |
| `/api/courses` | POST | Create course |
| `/api/courses/[id]` | GET | Get course details |
| `/api/courses/[id]` | PUT | Update course |
| `/api/teachers` | GET | List teachers |
| `/api/teachers/[id]` | GET | Get teacher profile |
| `/api/students` | GET | List students |
| `/api/bookings` | POST | Create booking |
| `/api/payments` | POST | Process payment |
| `/api/assignments` | GET | List assignments |
| `/api/assignments` | POST | Create assignment |
| `/api/messages` | GET | Get messages |
| `/api/messages` | POST | Send message |

---

## 🎨 Component Structure

### Homepage Components
- `ClassgapStyleHero.js` - Premium hero with search
- `LanguageTutors.js` - Language tutors section
- `ClassgapSubjects.js` - Subject categories
- `TrustFeatures.js` - Trust indicators
- `ClassgapHowItWorks.js` - How it works section
- `ClassgapTestimonials.js` - Testimonials carousel
- `StrongCTA.js` - Final call to action

### Shared Components
- `Navbar.js` - Navigation with country selector
- `Footer.js` - Footer with legal links
- `ContactForm.js` - Working contact form

---

## 🔐 Authentication Features

### Student Authentication
- ✅ Email/Password login
- ✅ Google OAuth (UI ready)
- ✅ Forgot password flow
- ✅ Sign up with email
- ✅ Sign up with Google

### Teacher Authentication
- ✅ Email/Password login
- ✅ Google OAuth (UI ready)
- ✅ Forgot password flow
- ✅ Multi-step registration form

### Admin Authentication
- ✅ Secure admin login
- ⏳ Role-based access (backend)

---

## 💳 Payment Integration (Frontend Ready)

### Payment Methods Supported
- Credit/Debit Cards
- PayPal
- Stripe (ready for integration)

### Payment Pages
- Checkout page with form validation
- Payment method management
- Transaction history
- Invoice generation (ready)

---

## 📱 Responsive Design

All pages are fully responsive:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

---

## 🚀 Deployment

**Production Domain:** https://education-three-sage.vercel.app

**Deployment Platform:** Vercel

**Status:** Frontend Complete, Backend Integration Pending

---

## 📝 Notes

1. All forms are functional on the frontend with validation
2. Google OAuth buttons are ready for backend integration
3. Payment forms are ready for Stripe/PayPal integration
4. All routes are SEO optimized with proper metadata
5. Legal pages include Bizsun Creative ownership disclosure
6. All pages follow accessibility best practices

---

## 🔄 Future Enhancements

- [ ] Real-time messaging system
- [ ] Video conferencing integration
- [ ] Assignment submission with file uploads
- [ ] Course video player
- [ ] Certificate generation
- [ ] Multi-language support
- [ ] Mobile app (React Native)

---

**Documentation maintained by:** Edgen Institute Development Team  
**For questions:** Contact development team or refer to codebase



