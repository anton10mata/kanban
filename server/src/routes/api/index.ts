import { Router } from "express";
import { authenticateToken } from "../../middleware/auth.js"; 
import ticketRoutes from "./ticket-routes.js";

const router = Router();

router.use("/tickets", authenticateToken as any, ticketRoutes);

export default router;
