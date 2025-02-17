import { Request, Response } from 'express';
import pool from "../db.js";  // ✅ Import the database connection


// Simulated ticket data (Replace with database logic)
const tickets = [
    { id: 1, title: "Fix login bug", status: "open" },
    { id: 2, title: "Update UI", status: "in progress" }
];

// Get all tickets
export const getAllTickets = async (req: Request, res: Response) => {
    try {
        console.log("✅ Fetching all tickets...");
        res.json(tickets);
    } catch (error) {
        console.error("🚨 Error getting tickets:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Get ticket by ID
export const getTicketById = async (req: Request, res: Response) => {
    try {
        const ticketId = parseInt(req.params.id);
        const ticket = tickets.find(t => t.id === ticketId);

        if (!ticket) {
            return res.status(404).json({ message: "Ticket not found" });
        }

        res.json(ticket);
    } catch (error) {
        console.error("🚨 Error fetching ticket:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Create a new ticket
export const createTicket = async (req: Request, res: Response) => {
  const { title, status } = req.body;

  try {
      const result = await pool.query(
          `INSERT INTO tickets (title, status) VALUES ($1, $2) RETURNING *;`,
          [title, status]
      );

      res.status(201).json(result.rows[0]);
  } catch (error) {
      console.error('❌ Error creating ticket:', error);
      res.status(500).json({ message: 'Server error' });
  }
};

// Update a ticket
export const updateTicket = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, status } = req.body;

  console.log(`🔍 Checking if ticket with ID ${id} exists...`);

  try {
      // Check if the ticket exists before updating
      const checkTicket = await pool.query('SELECT * FROM tickets WHERE id = $1', [id]);

      if (checkTicket.rows.length === 0) {
          console.log(`❌ Ticket with ID ${id} not found.`);
          return res.status(404).json({ message: 'Ticket not found' });
      }

      console.log(`✅ Ticket found! Proceeding with update...`);

      const result = await pool.query(
          `UPDATE tickets SET title = $1, status = $2 WHERE id = $3 RETURNING *;`,
          [title, status, id]
      );

      console.log(`✅ Ticket updated:`, result.rows[0]);

      res.json(result.rows[0]);
  } catch (error) {
      console.error('❌ Error updating ticket:', error);
      res.status(500).json({ message: 'Server error' });
  }
};

export const deleteTicket = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
      const result = await pool.query('DELETE FROM tickets WHERE id = $1 RETURNING *', [id]);

      if (result.rowCount === 0) {
          return res.status(404).json({ message: "Ticket not found" });
      }

      res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
      console.error("❌ Error deleting ticket:", error);
      res.status(500).json({ message: "Server error" });
  }
};
