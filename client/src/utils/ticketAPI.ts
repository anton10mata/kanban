export const API_URL = "https://kanban-backend.onrender.com/api/tickets";

// ✅ Helper function to add auth headers
const getAuthHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("userToken")}`,
});

export const getTickets = async () => {
  try {
    const response = await fetch(API_URL, { headers: getAuthHeaders() });
    if (!response.ok) throw new Error("Failed to fetch tickets");
    return response.json();
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return [];
  }
};

export const getTicket = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { headers: getAuthHeaders() });
    if (!response.ok) throw new Error("Failed to fetch ticket");
    return response.json();
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return null;
  }
};

export const createTicket = async (ticketData: { title: string; description: string }) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(ticketData),
    });

    if (!response.ok) throw new Error("Failed to create ticket");
  } catch (error) {
    console.error("Error creating ticket:", error);
  }
};

export const updateTicket = async (id: number, ticketData: { title: string; description: string }) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(ticketData),
    });

    if (!response.ok) throw new Error("Failed to update ticket");
  } catch (error) {
    console.error("Error updating ticket:", error);
  }
};

export const deleteTicket = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE", headers: getAuthHeaders() });
    if (!response.ok) throw new Error("Failed to delete ticket");
  } catch (error) {
    console.error("Error deleting ticket:", error);
  }
};
