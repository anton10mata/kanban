import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5003/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                alert("✅ Registration Successful!.");
                navigate("/login");
            }
            else {
                alert("❌ Registration Failed. Try a different username.");
            }
        }
        catch (error) {
            console.error("Registration Error:", error);
            alert("❌ Server Error. Try again.");
        }
    };
    return (_jsxs("div", { className: "register-container", children: [_jsx("h2", { children: "Register" }), _jsxs("form", { onSubmit: handleRegister, children: [_jsx("input", { type: "text", placeholder: "Username", value: username, onChange: (e) => setUsername(e.target.value), required: true }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), required: true }), _jsx("button", { type: "submit", children: "Register" })] })] }));
};
export default Register;
