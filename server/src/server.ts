import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

// ✅ Fix __dirname issue in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
import authRoutes from "./routes/auth-routes.js";
import ticketRoutes from "./routes/api/ticket-routes.js";

app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);

// ✅ Serve Frontend in Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
  });
}

// Start Server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
