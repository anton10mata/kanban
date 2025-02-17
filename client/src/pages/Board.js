import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React, { useEffect, useState } from "react";
// import { getTickets, deleteTicket } from "../utils/ticketAPI";
// import { useNavigate } from "react-router-dom";
// // Define the Ticket Type
// interface Ticket {
//   id: number;
//   title: string;
//   description: string;
// }
// const Board: React.FC = () => {
//   const [tickets, setTickets] = useState<Ticket[]>([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const fetchTickets = async () => {
//       const data: Ticket[] = await getTickets();
//       setTickets(data);
//     };
//     fetchTickets();
//   }, []);
//   const handleDelete = async (id: number) => {
//     await deleteTicket(id);
//     setTickets((prevTickets) => prevTickets.filter((ticket) => ticket.id !== id));
//   };
//   return (
//     <div className="board">
//       {tickets.map((ticket) => (
//         <div className="ticket" key={ticket.id}>
//           <h3>{ticket.title}</h3>
//           <p>{ticket.description}</p>
//           <button onClick={() => navigate(`/edit-ticket/${ticket.id}`)}>Edit</button>
//           <button onClick={() => handleDelete(ticket.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Board;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Board = () => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([
        { id: 1, title: "Test the API", description: "Test the API using Insomnia.", author: "JollyGuru" },
        { id: 2, title: "Implement authentication", description: "Set up user authentication using JWT tokens.", author: "JollyGuru" },
        { id: 3, title: "Set up project repository", description: "Create a new repository on GitHub and initialize it.", author: "RadiantComet" }
    ]);
    const handleDelete = (id) => {
        setTickets(tickets.filter(ticket => ticket.id !== id));
    };
    return (_jsx("div", { className: "board", children: ["Todo", "In Progress", "Done"].map((status, index) => (_jsxs("div", { className: "column", children: [_jsx("h2", { children: status }), tickets.map(ticket => (_jsxs("div", { className: "ticket", children: [_jsx("h3", { children: ticket.title }), _jsx("p", { children: ticket.description }), _jsx("p", { children: ticket.author }), _jsxs("div", { className: "ticket-buttons", children: [_jsx("button", { onClick: () => navigate(`/edit-ticket/${ticket.id}`), children: "Edit" }), _jsx("button", { onClick: () => handleDelete(ticket.id), children: "Delete" })] })] }, ticket.id)))] }, index))) }));
};
export default Board;
