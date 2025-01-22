import express from 'express';
import { loginUser, registerUser, getUserProfile } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// Public Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Private Routes (Requires Authentication)
router.get('/profile', protect, getUserProfile);

export default router;
