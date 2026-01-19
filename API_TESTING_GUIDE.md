# API Testing Guide - Edgen Institute

## Quick Testing Methods

### Method 1: Browser (Easiest - GET requests only)
### Method 2: Browser DevTools (GET & POST)
### Method 3: Postman/Insomnia (Recommended)
### Method 4: cURL (Command Line)
### Method 5: Frontend Integration

---

## Method 1: Browser Testing (GET requests)

Simply open these URLs in your browser:

### Test Endpoints
```
http://localhost:3000/api/test
http://localhost:3000/api/test/connection
http://localhost:3000/api/test/auth
```

### Public APIs
```
http://localhost:3000/api/courses
http://localhost:3000/api/teachers
```

---

## Method 2: Browser DevTools Console

Open browser console (F12) and test:

### Register a User
```javascript
fetch('http://localhost:3000/api/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'test@example.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
    role: 'student'
  })
})
.then(res => res.json())
.then(data => {
  console.log('Success:', data);
  // Save token for next requests
  localStorage.setItem('token', data.token);
})
.catch(error => console.error('Error:', error));
```

### Login
```javascript
fetch('http://localhost:3000/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'test@example.com',
    password: 'password123'
  })
})
.then(res => res.json())
.then(data => {
  console.log('Success:', data);
  localStorage.setItem('token', data.token);
})
.catch(error => console.error('Error:', error));
```

### Get Current User (requires token)
```javascript
const token = localStorage.getItem('token');

fetch('http://localhost:3000/api/auth/me', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
})
.then(res => res.json())
.then(data => console.log('User:', data))
.catch(error => console.error('Error:', error));
```

### Get Courses
```javascript
fetch('http://localhost:3000/api/courses')
  .then(res => res.json())
  .then(data => console.log('Courses:', data))
  .catch(error => console.error('Error:', error));
```

---

## Method 3: Postman/Insomnia (Best for Testing)

### Setup Postman

1. **Import Collection** (Create these requests):

#### Register User
- **Method:** POST
- **URL:** `http://localhost:3000/api/auth/register`
- **Headers:** 
  ```
  Content-Type: application/json
  ```
- **Body (raw JSON):**
```json
{
  "email": "test@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "role": "student"
}
```

#### Login
- **Method:** POST
- **URL:** `http://localhost:3000/api/auth/login`
- **Headers:** 
  ```
  Content-Type: application/json
  ```
- **Body (raw JSON):**
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

#### Get Current User (Protected)
- **Method:** GET
- **URL:** `http://localhost:3000/api/auth/me`
- **Headers:** 
  ```
  Authorization: Bearer {{token}}
  Content-Type: application/json
  ```
- **Note:** Save token from login response as `{{token}}` variable

#### Create Course (Teacher only)
- **Method:** POST
- **URL:** `http://localhost:3000/api/courses`
- **Headers:** 
  ```
  Authorization: Bearer {{token}}
  Content-Type: application/json
  ```
- **Body (raw JSON):**
```json
{
  "title": "Introduction to JavaScript",
  "description": "Learn the basics of JavaScript programming",
  "subject": "Programming",
  "category": "Technology",
  "price": 99.99,
  "level": "beginner",
  "language": "English"
}
```

---

## Method 4: cURL Commands (Terminal)

### Test Connection
```bash
curl http://localhost:3000/api/test
```

### Register User
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe",
    "role": "student"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Get Current User (with token)
```bash
# Save token from login response first
TOKEN="your_token_here"

curl http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer $TOKEN"
```

### Get Courses
```bash
curl http://localhost:3000/api/courses
```

### Get Teachers
```bash
curl http://localhost:3000/api/teachers
```

---

## Method 5: Frontend Integration Test

### Update your login page to use API

Example for `app/student/login/page.js`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setErrors({})
  setIsSubmitting(true)

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        role: 'student'
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Login failed')
    }

    // Save token
    localStorage.setItem('token', data.token)
    
    // Save user data
    localStorage.setItem('user', JSON.stringify(data.user))

    // Redirect to dashboard
    window.location.href = '/student/dashboard'
  } catch (error) {
    setErrors({ submit: error.message })
  } finally {
    setIsSubmitting(false)
  }
}
```

---

## Complete Test Flow

### Step 1: Test Connection
```bash
GET http://localhost:3000/api/test
```
✅ Should show all tests passing

### Step 2: Register a Student
```javascript
POST /api/auth/register
{
  "email": "student@test.com",
  "password": "test123",
  "firstName": "Test",
  "lastName": "Student",
  "role": "student"
}
```
✅ Should return user object and token

### Step 3: Register a Teacher
```javascript
POST /api/auth/register
{
  "email": "teacher@test.com",
  "password": "test123",
  "firstName": "Test",
  "lastName": "Teacher",
  "role": "teacher"
}
```
✅ Should return user object and token

### Step 4: Login as Student
```javascript
POST /api/auth/login
{
  "email": "student@test.com",
  "password": "test123"
}
```
✅ Should return user and token

### Step 5: Get Current User
```javascript
GET /api/auth/me
Headers: Authorization: Bearer {token}
```
✅ Should return user data

### Step 6: Create Course (as Teacher)
```javascript
POST /api/courses
Headers: Authorization: Bearer {teacher_token}
{
  "title": "Test Course",
  "description": "This is a test course",
  "subject": "Mathematics",
  "category": "Science",
  "price": 50.00
}
```
✅ Should return created course

### Step 7: Get Courses
```javascript
GET /api/courses
```
✅ Should return list of courses

### Step 8: Get Teachers
```javascript
GET /api/teachers
```
✅ Should return list of teachers

---

## Quick Test Script (Browser Console)

Copy and paste this into your browser console:

```javascript
// Complete API Test Suite
const API_BASE = 'http://localhost:3000/api';

async function testAPI() {
  console.log('🧪 Starting API Tests...\n');

  // 1. Test Connection
  console.log('1️⃣ Testing connection...');
  try {
    const testRes = await fetch(`${API_BASE}/test`);
    const testData = await testRes.json();
    console.log('✅ Connection test:', testData.success ? 'PASSED' : 'FAILED');
  } catch (e) {
    console.error('❌ Connection test failed:', e);
  }

  // 2. Register User
  console.log('\n2️⃣ Registering user...');
  try {
    const registerRes = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: `test${Date.now()}@example.com`,
        password: 'test123',
        firstName: 'Test',
        lastName: 'User',
        role: 'student'
      })
    });
    const registerData = await registerRes.json();
    if (registerRes.ok) {
      console.log('✅ Registration:', 'SUCCESS');
      const token = registerData.token;
      console.log('Token:', token.substring(0, 30) + '...');

      // 3. Get Current User
      console.log('\n3️⃣ Getting current user...');
      const meRes = await fetch(`${API_BASE}/auth/me`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const meData = await meRes.json();
      console.log('✅ Current user:', meRes.ok ? 'SUCCESS' : 'FAILED');
      if (meRes.ok) {
        console.log('User:', meData.user.email);
      }

      // 4. Get Courses
      console.log('\n4️⃣ Fetching courses...');
      const coursesRes = await fetch(`${API_BASE}/courses`);
      const coursesData = await coursesRes.json();
      console.log('✅ Courses:', coursesRes.ok ? `Found ${coursesData.courses?.length || 0} courses` : 'FAILED');

      // 5. Get Teachers
      console.log('\n5️⃣ Fetching teachers...');
      const teachersRes = await fetch(`${API_BASE}/teachers`);
      const teachersData = await teachersRes.json();
      console.log('✅ Teachers:', teachersRes.ok ? `Found ${teachersData.teachers?.length || 0} teachers` : 'FAILED');

    } else {
      console.error('❌ Registration failed:', registerData.error);
    }
  } catch (e) {
    console.error('❌ Test error:', e);
  }

  console.log('\n✨ API tests completed!');
}

// Run tests
testAPI();
```

---

## Common Issues & Solutions

### Issue: "Unauthorized" or "Invalid token"
**Solution:** Make sure you're including the token in Authorization header:
```
Authorization: Bearer your_token_here
```

### Issue: CORS errors
**Solution:** This shouldn't happen with Next.js API routes, but if it does, check your server is running on `localhost:3000`

### Issue: "User already exists"
**Solution:** Use a different email, or test with timestamps:
```javascript
email: `test${Date.now()}@example.com`
```

---

## Recommended Testing Order

1. ✅ `/api/test` - Verify everything is working
2. ✅ `/api/auth/register` - Create test users
3. ✅ `/api/auth/login` - Test authentication
4. ✅ `/api/auth/me` - Test protected route
5. ✅ `/api/courses` - Test public routes
6. ✅ `/api/courses` (POST) - Test protected creation
7. ✅ `/api/assignments`, `/api/payments`, etc. - Test other endpoints

**Happy Testing! 🚀**

