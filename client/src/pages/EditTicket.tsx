import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTicket, updateTicket } from "../utils/ticketAPI";

const EditTicket: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTicket = async () => {
      const ticket = await getTicket(Number(id));
      setTitle(ticket.title);
      setDescription(ticket.description);
    };
    fetchTicket();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateTicket(Number(id), { title, description });
    navigate("/");
  };

  return (
    <div className="ticket-form">
      <h2>Edit Ticket</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Update Ticket</button>
      </form>
    </div>
  );
};

export default EditTicket;
