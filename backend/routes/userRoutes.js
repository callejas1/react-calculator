import express from 'express'
const router = express.Router()
import { authUser, getUserInfo, registerUser, updateCount } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.route('/:id').get(getUserInfo, protect)
router.post('/login', authUser)
router.route('/attempts').post(updateCount)

export default router
