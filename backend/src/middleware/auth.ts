import { Request, Response, NextFunction } from 'express';

// Simple token-based authentication middleware for widgets
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  const validToken = process.env.WIDGET_API_TOKEN;

  // If no token is configured in env, allow for development purposes, 
  // otherwise strictly check.
  if (!validToken) {
    console.warn('WIDGET_API_TOKEN is not set in environment. Bypassing auth.');
    return next();
  }

  if (token !== validToken) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }

  next();
};
