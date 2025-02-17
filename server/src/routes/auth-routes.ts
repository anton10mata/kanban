import { Router, Request, Response } from 'express';
import { getUserByUsername, createUser } from '../controllers/user-controller.js';  
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router();
const SECRET_KEY = process.env.JWT_SECRET || 'default_secret';

// ✅ User Registration Route
router.post('/register', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        console.log("📌 Received registration request for:", username);

        // Check if user already exists
        const existingUser = await getUserByUsername(username);
        if (existingUser) {
            console.log("❌ Username already exists");
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser(username, hashedPassword);

        console.log("✅ User registered successfully:", newUser);

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("🔥 Registration error:", error);
        res.status(500).json({ message: 'Server error' });
    }
});

// ✅ User Login Route
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        console.log("📌 Received login request for:", username);

        const user = await getUserByUsername(username);
        console.log("🛠 Found user in DB:", user);

        if (!user) {
            console.log("❌ User not found in database");
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("🔑 Password match:", isPasswordValid);

        if (!isPasswordValid) {
            console.log("❌ Password incorrect");
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        console.log("✅ Login successful, token generated:", token);
        res.json({ token });
    } catch (error) {
        console.error("🔥 Login error:", error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
