// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <nav>
//       <h1>Kanban Board</h1>
//       <div>
//         <button onClick={() => navigate("/new-ticket")}>New Ticket</button>
//         <button onClick={() => navigate("/login")}>Login</button>
//         <button onClick={() => navigate("/register")}>Register</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../utils/auth";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Auth.logout();
    navigate("/login");
  };

  return (
    <nav>
      <h1 onClick={() => navigate("/")}>Krazy Kanban Board</h1>
      <div>
        <button onClick={() => navigate("/new-ticket")}>New Ticket</button>
        {Auth.loggedIn() ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
