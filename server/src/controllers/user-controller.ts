import db from '../db/database.js';
import bcrypt from 'bcryptjs';

export const getUserByUsername = async (username: string) => {
    const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
};

export const getAllUsers = async () => {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
};

export const getUserById = async (id: number) => {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
};

export const createUser = async (username: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.query(
        'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
        [username, hashedPassword]
    );
    return result.rows[0];
};

export const updateUser = async (id: number, username: string) => {
    const result = await db.query(
        'UPDATE users SET username = $1 WHERE id = $2 RETURNING *',
        [username, id]
    );
    return result.rows[0];
};

export const deleteUser = async (id: number) => {
    await db.query('DELETE FROM users WHERE id = $1', [id]);
    return { message: 'User deleted successfully' };
};
