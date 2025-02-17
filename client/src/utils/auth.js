export const API_URL = "https://kanban-backend.up.railway.app/api";
export const Auth = {
    loggedIn: () => {
        return localStorage.getItem("userToken") ? true : false;
    },
    login: (token) => {
        localStorage.setItem("userToken", token);
    },
    logout: () => {
        localStorage.removeItem("userToken");
    },
};
