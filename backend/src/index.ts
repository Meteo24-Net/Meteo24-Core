import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { weatherRouter } from './routes/weather';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRouter);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'meteo24-backend' });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
