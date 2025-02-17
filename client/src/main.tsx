// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const rootElement = document.getElementById("root");

// if (!rootElement) {
//     throw new Error("Root element with id 'root' not found. Check your index.html!");
// }

// createRoot(rootElement).render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// );

import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
