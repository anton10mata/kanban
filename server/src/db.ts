import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME || "kanban",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    logging: false, // Set to true if you want SQL query logs
  }
);

// ✅ Sync database schema
sequelize
  .sync({ alter: true }) // Ensures schema updates without data loss
  .then(() => console.log("✅ Database synchronized"))
  .catch((err) => console.error("❌ Database sync error:", err));

export default sequelize;
