import { Router } from 'express';
import apiRoutes from './api/index.js'; // ✅ Ensure the correct import path

const router = Router();

// ✅ Mount API routes at /api
router.use('/api', apiRoutes);

export default router;
