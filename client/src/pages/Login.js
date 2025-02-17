import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../utils/auth";
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        Auth.login("fakeToken"); // Simulated login for now
        window.location.href = "/";
    };
    return (_jsxs("div", { className: "auth-container", children: [_jsx("h2", { children: "Login" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", placeholder: "Username", value: username, onChange: (e) => setUsername(e.target.value), required: true }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), required: true }), _jsx("button", { type: "submit", children: "Login" })] }), _jsx("p", { children: "Don't have an account?" }), _jsx("button", { onClick: () => navigate("/register"), children: "Register New User" })] }));
};
export default Login;
