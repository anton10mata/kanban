import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTicket, updateTicket } from "../utils/ticketAPI";
const EditTicket = () => {
    const { id } = useParams();
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
    const handleUpdate = async (e) => {
        e.preventDefault();
        await updateTicket(Number(id), { title, description });
        navigate("/");
    };
    return (_jsxs("div", { className: "ticket-form", children: [_jsx("h2", { children: "Edit Ticket" }), _jsxs("form", { onSubmit: handleUpdate, children: [_jsx("input", { type: "text", value: title, onChange: (e) => setTitle(e.target.value), required: true }), _jsx("textarea", { value: description, onChange: (e) => setDescription(e.target.value), required: true }), _jsx("button", { type: "submit", children: "Update Ticket" })] })] }));
};
export default EditTicket;
