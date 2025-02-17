export const API_URL = "https://kanban-backend.onrender.com/api/auth";

export const Auth = {
  loggedIn: () => {
    return localStorage.getItem("userToken") !== null;
  },

  login: async (username: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error("Invalid credentials");

      const { token } = await response.json();
      localStorage.setItem("userToken", token);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  },

  register: async (username: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error("Registration failed");

      return true;
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("userToken");
  },
};
