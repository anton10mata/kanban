export const API_URL = "https://kanban-backend-213q.onrender.com/api";
export const getTickets = async () => {
    const response = await fetch(API_URL);
    return response.json();
};
export const getTicket = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};
export const createTicket = async (ticketData) => {
    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticketData),
    });
};
export const updateTicket = async (id, ticketData) => {
    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticketData),
    });
};
export const deleteTicket = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
