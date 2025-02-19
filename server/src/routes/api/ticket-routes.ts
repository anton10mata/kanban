// import express, { Router, RequestHandler } from "express";
// import { createTicket, updateTicket, deleteTicket } from "../../controllers/ticket-controller.js";
// import { authenticateToken } from "../../middleware/auth.js";  

// const router = Router();

// // ✅ Use `RequestHandler` type for middleware
// router.post("/", authenticateToken as RequestHandler, createTicket);
// router.put("/:id", authenticateToken as RequestHandler, updateTicket);
// router.delete("/:id", authenticateToken as RequestHandler, deleteTicket);

// export default router;

import { Router } from "express";
import { createTicket, updateTicket, deleteTicket } from "../../controllers/ticket-controller.js";
import { authenticateToken } from "../../middleware/auth.js";  

const router = Router();

// ✅ No need for explicit type conversion
router.post("/", authenticateToken, createTicket);
router.put("/:id", authenticateToken, updateTicket);
router.delete("/:id", authenticateToken, deleteTicket);

export default router;
