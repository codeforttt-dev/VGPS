import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import connectDB from './src/config/db.js';
import apiRoutes from './src/routes/router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware (Safe for Live)
app.use(helmet()); // Adds extra security headers

// CORS configuration (Allow both local development and live website)
const corsOptions = {
  origin: [
    'http://localhost:5173', 
    process.env.FRONTEND_URL || 'https://valleygreenpublicschool.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};
app.use(cors(corsOptions));

// Rate Limiting (Protects from spam / DDoS attacks)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per 15 mins
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use('/api', apiLimiter); // Apply rate limiter to all /api routes

// Parsing Middleware
app.use(express.json());

// Database connection
connectDB();

// API Routes
app.use('/api', apiRoutes);

// Base Route
app.get('/', (req, res) => {
  res.send('VGPS API is running securely...');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
