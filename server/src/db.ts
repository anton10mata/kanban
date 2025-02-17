import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'kanban',
    password: process.env.DB_PASSWORD || '',
    port: Number(process.env.DB_PORT) || 5432,
});

console.log("✅ Connected to Database:", process.env.DATABASE_URL);

export default pool;
