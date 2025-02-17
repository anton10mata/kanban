export const API_URL = "kanban-production-6ff7.up.railway.app";

export const Auth = {
    loggedIn: () => {
      return localStorage.getItem("userToken") ? true : false;
    },
    login: (token: string) => {
      localStorage.setItem("userToken", token);
    },
    logout: () => {
      localStorage.removeItem("userToken");
    },
  };

