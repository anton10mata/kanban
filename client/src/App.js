import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "./utils/auth";
import Navbar from "./components/Navbar";
import Board from "./pages/Board";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewTicket from "./pages/NewTicket";
import EditTicket from "./pages/EditTicket";
const App = () => {
    return (_jsxs(Router, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: Auth.loggedIn() ? _jsx(Board, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/register", element: _jsx(Register, {}) }), "  ", _jsx(Route, { path: "/new-ticket", element: Auth.loggedIn() ? _jsx(NewTicket, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/edit-ticket/:id", element: Auth.loggedIn() ? _jsx(EditTicket, {}) : _jsx(Navigate, { to: "/login" }) })] })] }));
};
export default App;
