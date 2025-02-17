export const API_URL = "kanban-production-6ff7.up.railway.app";


export const getTickets = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const getTicket = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const createTicket = async (ticketData: { title: string; description: string }) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticketData),
  });
};

export const updateTicket = async (id: number, ticketData: { title: string; description: string }) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticketData),
  });
};

export const deleteTicket = async (id: number) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
