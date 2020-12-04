import express from 'express'
import {
  authUser,
  registerUser,
  getUserProfile,
  // updateUserProfile,
  // getUsers,
  // deleteUser,
  // getUserById,
  // updateUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
