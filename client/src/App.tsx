import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "./utils/auth";
import Navbar from "./components/Navbar";
import Board from "./pages/Board";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewTicket from "./pages/NewTicket";
import EditTicket from "./pages/EditTicket";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={Auth.loggedIn() ? <Board /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  {/* ✅ New Register Page */}
        <Route path="/new-ticket" element={Auth.loggedIn() ? <NewTicket /> : <Navigate to="/login" />} />
        <Route path="/edit-ticket/:id" element={Auth.loggedIn() ? <EditTicket /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
