import { Router } from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../../controllers/user-controller.js';

const router = Router();

// Get all users
router.get('/', async (req, res) => {
    const users = await getAllUsers();
    res.json(users);
});

// Get user by ID
router.get('/:id', async (req, res) => {
    const user = await getUserById(parseInt(req.params.id));
    res.json(user);
});

// Create a new user
router.post('/', async (req, res) => {
    const { username, password } = req.body;
    const newUser = await createUser(username, password);
    res.json(newUser);
});

// Update user
router.put('/:id', async (req, res) => {
    const { username } = req.body;
    const updatedUser = await updateUser(parseInt(req.params.id), username);
    res.json(updatedUser);
});

// Delete user
router.delete('/:id', async (req, res) => {
    const result = await deleteUser(parseInt(req.params.id));
    res.json(result);
});

export default router;
