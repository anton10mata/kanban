// import express from 'express';
// import routes from './routes/index.js';
// import cors from "cors";
// import dotenv from "dotenv";


// const app = express();
// const PORT = process.env.PORT || 5003;

// app.use(express.json());
// app.use('/', routes);  // ✅ Correctly register all routes

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// app.use(
//     cors({
//       origin: "http://localhost:5173", // Allow frontend origin
//       methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
//       credentials: true, // Allow cookies
//     })
//   );
  
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-routes.js";

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
