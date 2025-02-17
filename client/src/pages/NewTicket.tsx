import React, { useState } from "react";
import { createTicket } from "../utils/ticketAPI";
import { useNavigate } from "react-router-dom";

const NewTicket: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTicket({ title, description });
    navigate("/"); // Redirect to board
  };

  return (
    <div className="ticket-form">
      <h2>Create a New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
};

export default NewTicket;
