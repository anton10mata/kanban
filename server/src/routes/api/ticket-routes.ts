import { Router } from 'express';
import { getAllTickets, createTicket, getTicketById, updateTicket, deleteTicket } from '../../controllers/ticket-controller';
import { authenticateToken } from '../../middleware/auth';

const router = Router();

// ✅ Protect ticket routes with authentication
router.get('/', authenticateToken, getAllTickets);
router.get('/:id', authenticateToken, getTicketById);
router.post('/', authenticateToken, createTicket);
router.put('/:id', authenticateToken, updateTicket);
router.delete('/:id', authenticateToken, deleteTicket); 

export default router;
