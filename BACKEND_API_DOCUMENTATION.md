# Edgen Institute - Backend API Documentation


## MongoDB Setup

### Environment Variables
Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/edgen-institute?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Database Models
- **User** - Students, Teachers, Admins
- **Course** - Course catalog with lessons
- **Assignment** - Course assignments with submissions
- **Payment** - Payment transactions
- **Booking** - Session bookings
- **Message** - User messaging
- **Notification** - User notifications

---

## Authentication APIs

### POST `/api/auth/register`
Register a new user (student/teacher)

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "role": "student", // "student" | "teacher" | "admin"
  "phone": "+1234567890" // optional
}
```

**Response:**
```json
{
  "user": {
    "id": "...",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "student"
  },
  "token": "jwt_token_here"
}
```

---

### POST `/api/auth/login`
Login user

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "role": "student" // optional
}
```

**Response:**
```json
{
  "user": { ... },
  "token": "jwt_token_here"
}
```

---

### GET `/api/auth/me`
Get current authenticated user

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "user": { ... }
}
```

---

## Course APIs

### GET `/api/courses`
Get all courses with filters

**Query Parameters:**
- `subject` - Filter by subject
- `category` - Filter by category
- `teacher` - Filter by teacher ID
- `level` - Filter by level (beginner/intermediate/advanced)
- `status` - Filter by status (default: published)
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 12)

**Response:**
```json
{
  "courses": [ ... ],
  "pagination": {
    "page": 1,
    "limit": 12,
    "total": 100,
    "pages": 9
  }
}
```

---

### POST `/api/courses`
Create new course (Teacher only)

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "Course Title",
  "description": "Course description",
  "subject": "Mathematics",
  "category": "Science",
  "price": 99.99,
  "level": "beginner",
  "language": "English",
  "thumbnail": "url"
}
```

---

### GET `/api/courses/[id]`
Get course by ID

**Response:**
```json
{
  "course": { ... }
}
```

---

### PUT `/api/courses/[id]`
Update course (Teacher/Admin only)

---

### DELETE `/api/courses/[id]`
Delete course (Teacher/Admin only)

---

### POST `/api/courses/[id]/enroll`
Enroll in course (Student only)

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "message": "Successfully enrolled in course",
  "course": {
    "id": "...",
    "title": "..."
  }
}
```

---

## Assignment APIs

### GET `/api/assignments`
Get assignments (filtered by role)

**Query Parameters:**
- `course` - Filter by course ID
- `student` - Filter by student ID (Teacher only)

---

### POST `/api/assignments`
Create assignment (Teacher only)

**Request Body:**
```json
{
  "course": "course_id",
  "title": "Assignment Title",
  "description": "Description",
  "instructions": "Instructions",
  "dueDate": "2024-12-31T23:59:59Z",
  "maxScore": 100,
  "assignedTo": ["student_id1", "student_id2"]
}
```

---

### GET `/api/assignments/[id]`
Get assignment by ID

---

### POST `/api/assignments/[id]/submit`
Submit assignment (Student only)

**Request Body:**
```json
{
  "files": [
    {
      "name": "file.pdf",
      "url": "https://...",
      "type": "pdf"
    }
  ],
  "textAnswer": "Answer text"
}
```

---

## Payment APIs

### GET `/api/payments`
Get payment history

---

### POST `/api/payments`
Create payment record (Student only)

**Request Body:**
```json
{
  "course": "course_id",
  "amount": 99.99,
  "paymentMethod": "card",
  "transactionId": "unique_transaction_id",
  "paymentProvider": "stripe",
  "providerTransactionId": "provider_txn_id"
}
```

---

## Teacher APIs

### GET `/api/teachers`
Get all teachers

**Query Parameters:**
- `subject` - Filter by subject
- `approved` - Filter by approval status (default: true)
- `page` - Page number
- `limit` - Items per page

---

### GET `/api/teachers/[id]`
Get teacher by ID with courses

**Response:**
```json
{
  "teacher": { ... },
  "courses": [ ... ]
}
```

---

## Message APIs

### GET `/api/messages`
Get messages/conversations

**Query Parameters:**
- `conversationId` - Get messages for specific conversation
- `otherUser` - Get/create conversation with specific user

---

### POST `/api/messages`
Send message

**Request Body:**
```json
{
  "recipient": "user_id",
  "content": "Message content",
  "attachments": [],
  "relatedCourse": "course_id", // optional
  "relatedBooking": "booking_id" // optional
}
```

---

## Notification APIs

### GET `/api/notifications`
Get notifications

**Query Parameters:**
- `unread` - Get only unread notifications (true/false)
- `limit` - Limit results (default: 50)

**Response:**
```json
{
  "notifications": [ ... ],
  "unreadCount": 5
}
```

---

### PUT `/api/notifications`
Mark notification(s) as read

**Request Body:**
```json
{
  "notificationId": "notification_id" // OR
  "markAllRead": true
}
```

---

## Booking APIs

### GET `/api/bookings`
Get bookings (filtered by role)

---

### POST `/api/bookings`
Create booking (Student only)

**Request Body:**
```json
{
  "teacher": "teacher_id",
  "course": "course_id", // optional
  "date": "2024-12-31",
  "startTime": "10:00",
  "endTime": "11:00",
  "duration": 60,
  "sessionType": "regular",
  "amount": 50.00
}
```

---

## Admin APIs

### GET `/api/admin/analytics`
Get platform analytics (Admin only)

**Response:**
```json
{
  "analytics": {
    "users": {
      "totalStudents": 1000,
      "totalTeachers": 100,
      "totalUsers": 1100
    },
    "courses": {
      "total": 500,
      "active": 450,
      "totalEnrollments": 5000,
      "pendingApprovals": 10
    },
    "revenue": {
      "total": 50000,
      "currency": "USD"
    },
    "bookings": {
      "total": 200
    }
  }
}
```

---

## Authentication Headers

All protected routes require:
```
Authorization: Bearer <jwt_token>
```

Or set as cookie:
```
token: <jwt_token>
```

---

## Error Responses

All errors follow this format:
```json
{
  "error": "Error message here"
}
```

Status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

---

## Installation

1. Install dependencies:
```bash
npm install mongoose bcryptjs jsonwebtoken
```

2. Create `.env.local` file with MongoDB connection string

3. Start development server:
```bash
npm run dev
```

---

**All APIs are ready to use! Add your MongoDB connection string to `.env.local` and start using the backend.**

