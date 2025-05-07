import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { PrismaClient } from './generated/prisma';
import eventRoutes from './routes/events';
import groupRoutes from './routes/groups';
import playerRoutes from './routes/players';
import authRoutes from './routes/auth';
import { authMiddleware, adminMiddleware } from './middleware/auth';

// Load environment variables
dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/players', playerRoutes);

// Protected routes
app.use('/api/admin', authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: 'Admin access granted' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 