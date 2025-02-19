import { Ticket } from "../models/ticket.js"; 

export const seedTickets = async () => {
    await Ticket.bulkCreate([
        { name: "Fix login bug", status: "open", description: "Resolve authentication issues", assignedUserId: 1 },
        { name: "Update UI", status: "in progress", description: "Revamp the frontend layout", assignedUserId: 2 }
    ]);
};
