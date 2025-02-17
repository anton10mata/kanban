import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { createTicket } from "../utils/ticketAPI";
import { useNavigate } from "react-router-dom";
const NewTicket = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTicket({ title, description });
        navigate("/"); // Redirect to board
    };
    return (_jsxs("div", { className: "ticket-form", children: [_jsx("h2", { children: "Create a New Ticket" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", placeholder: "Title", value: title, onChange: (e) => setTitle(e.target.value), required: true }), _jsx("textarea", { placeholder: "Description", value: description, onChange: (e) => setDescription(e.target.value), required: true }), _jsx("button", { type: "submit", children: "Create Ticket" })] })] }));
};
export default NewTicket;
