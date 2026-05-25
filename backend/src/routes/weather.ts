import { Router } from 'express';
import { requireAuth } from '../middleware/auth';

export const weatherRouter = Router();

// Endpoint for the widgets to fetch weather data
weatherRouter.get('/current', requireAuth, (req, res) => {
  // Placeholder: In the future, this will fetch from the real weather API
  // and normalize the response for the widgets.
  res.json({
    location: 'Tbilisi',
    temperature: 22,
    condition: 'Sunny',
    aqi: 45
  });
});
