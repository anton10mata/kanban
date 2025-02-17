import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-routes.js";
import ticketRoutes from './routes/api/ticket-routes';

dotenv.config();

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes); // ✅ Ensure correct route prefix
// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));