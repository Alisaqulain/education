import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'

/** Max-age seconds for httpOnly session cookie (align with JWT default 7d) */
const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 7

export function getAuthCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: AUTH_COOKIE_MAX_AGE,
  }
}

export function attachAuthCookie(response, token) {
  response.cookies.set('token', token, getAuthCookieOptions())
  return response
}

export function clearAuthCookie(response) {
  response.cookies.set('token', '', { ...getAuthCookieOptions(), maxAge: 0 })
  return response
}

export function generateToken(userId, role) {
  return jwt.sign(
    { userId, role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  )
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export async function hashPassword(password) {
  return bcrypt.hash(password, 12)
}

export async function comparePassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword)
}

export function getAuthToken(req) {
  const authHeader = req.headers.authorization
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }
  
  // Also check cookies
  if (req.cookies?.token) {
    return req.cookies.token
  }
  
  return null
}

export function requireAuth(handler) {
  return async (req, res) => {
    const token = getAuthToken(req)
    
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    
    const decoded = verifyToken(token)
    if (!decoded) {
      return res.status(401).json({ error: 'Invalid or expired token' })
    }
    
    req.user = decoded
    return handler(req, res)
  }
}

export function requireRole(...allowedRoles) {
  return (handler) => {
    return async (req, res) => {
      const token = getAuthToken(req)
      
      if (!token) {
        return res.status(401).json({ error: 'Unauthorized' })
      }
      
      const decoded = verifyToken(token)
      if (!decoded) {
        return res.status(401).json({ error: 'Invalid or expired token' })
      }
      
      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ error: 'Forbidden' })
      }
      
      req.user = decoded
      return handler(req, res)
    }
  }
}




