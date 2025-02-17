import { Router } from 'express';
import authRoutes from '../auth-routes.js';  // ✅ Ensure correct import
import ticketRoutes from './ticket-routes.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = Router();

// ✅ Public route for login
router.use('/auth', authRoutes);

// ✅ Protected routes
router.use('/tickets', authenticateToken, ticketRoutes);

export default router;
