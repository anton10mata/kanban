// import { Request, Response } from "express";
// import { Ticket } from "../models/ticket.js";  

// // Create a new ticket
// export const createTicket = async (req: Request, res: Response) => {
//   try {
//     const { name, status, description } = req.body as {
//       name: string;
//       status: string;
//       description: string;
//     };

//     const newTicket = await Ticket.create({ name, status, description });

//     res.status(201).json(newTicket);
//   } catch (error) {
//     console.error("❌ Error creating ticket:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Update a ticket
// export const updateTicket = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { name, status, description } = req.body as {
//       name: string;
//       status: string;
//       description: string;
//     };

//     const ticket = await Ticket.findByPk(id);
//     if (!ticket) {
//       return res.status(404).json({ message: "Ticket not found" });
//     }

//     await ticket.update({ name, status, description });
//     res.json(ticket);
//   } catch (error) {
//     console.error("❌ Error updating ticket:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Delete a ticket
// export const deleteTicket = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;

//     const ticket = await Ticket.findByPk(id);
//     if (!ticket) {
//       return res.status(404).json({ message: "Ticket not found" });
//     }

//     await ticket.destroy();
//     res.json({ message: "Ticket deleted successfully" });
//   } catch (error) {
//     console.error("❌ Error deleting ticket:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

import { Request, Response } from "express";
import { Ticket } from "../models/ticket.js";  

// Create a new ticket
export const createTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, status, description } = req.body as {
      name: string;
      status: string;
      description: string;
    };

    const newTicket = await Ticket.create({ name, status, description });

    res.status(201).json(newTicket);
  } catch (error) {
    console.error("❌ Error creating ticket:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a ticket
export const updateTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, status, description } = req.body as {
      name: string;
      status: string;
      description: string;
    };

    const ticket = await Ticket.findByPk(id);
    if (!ticket) {
      res.status(404).json({ message: "Ticket not found" });
      return; // ✅ Ensure function returns void
    }

    await ticket.update({ name, status, description });
    res.status(200).json(ticket);
  } catch (error) {
    console.error("❌ Error updating ticket:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a ticket
export const deleteTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const ticket = await Ticket.findByPk(id);
    if (!ticket) {
      res.status(404).json({ message: "Ticket not found" });
      return; // ✅ Ensure function returns void
    }

    await ticket.destroy();
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting ticket:", error);
    res.status(500).json({ message: "Server error" });
  }
};
