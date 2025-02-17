import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-routes.js";
import ticketRoutes from './routes/api/ticket-routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

app.use(express.json()); // Parse JSON bodies
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes); // ✅ Ensure correct route prefix

app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});
