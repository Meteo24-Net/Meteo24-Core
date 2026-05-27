import { Request, Response, NextFunction } from 'express';

// Simple token-based authentication middleware for widgets
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  const validToken = process.env.WIDGET_API_TOKEN;

  if (!validToken) {
    // In production, refuse to operate without a configured token
    if (process.env.NODE_ENV === 'production') {
      console.error('FATAL: WIDGET_API_TOKEN is not set in production. Rejecting request.');
      return res.status(503).json({ error: 'Service misconfigured' });
    }
    // In development, warn but allow through for convenience
    console.warn('WIDGET_API_TOKEN is not set. Bypassing auth (dev only).');
    return next();
  }

  if (token !== validToken) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }

  next();
};
