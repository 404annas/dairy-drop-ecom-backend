// src/middleware/session.js
import session from 'express-session';
import { env } from '../config/env.js';

export const sessionMiddleware = session({
  secret: env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000
  }, // 24 hours
});