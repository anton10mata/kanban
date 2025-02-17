import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { Auth } from "../utils/auth";
const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        Auth.logout();
        navigate("/login");
    };
    return (_jsxs("nav", { children: [_jsx("h1", { onClick: () => navigate("/"), children: "Krazy Kanban Board" }), _jsxs("div", { children: [_jsx("button", { onClick: () => navigate("/new-ticket"), children: "New Ticket" }), Auth.loggedIn() ? (_jsx("button", { onClick: handleLogout, children: "Logout" })) : (_jsx("button", { onClick: () => navigate("/login"), children: "Login" }))] })] }));
};
export default Navbar;
