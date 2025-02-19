// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// const SECRET_KEY = process.env.JWT_SECRET || 'default_secret';

// export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (!token) {
//         console.log("🚨 Token missing in request headers");
//         return res.status(401).json({ message: 'Token missing' });
//     }

//     jwt.verify(token, SECRET_KEY, (err, user) => {
//         if (err) {
//             console.log("❌ Invalid token:", err.message);
//             return res.status(403).json({ message: 'Invalid token' });
//         }

//         console.log("✅ Decoded User:", user); // Log user for debugging

//         // Ensure req.user exists
//         if (!user) {
//             console.log("⚠️ User not found in decoded token!");
//             return res.status(403).json({ message: 'User authentication failed' });
//         }

//         (req as any).user = user;  // Attach user to request
//         next();
//     });
// };


import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "default_secret";

export const authenticateToken: RequestHandler = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        console.log("🚨 Token missing in request headers");
        res.status(401).json({ message: "Token missing" });
        return; // ✅ Ensure function ends here
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            console.log("❌ Invalid token:", err.message);
            res.status(403).json({ message: "Invalid token" });
            return; // ✅ Ensure function ends here
        }

        console.log("✅ Decoded User:", user);

        if (!user) {
            console.log("⚠️ User not found in decoded token!");
            res.status(403).json({ message: "User authentication failed" });
            return; // ✅ Ensure function ends here
        }

        (req as any).user = user;  // Attach user to request
        next(); // ✅ Ensure `next()` is always called
    });
};
