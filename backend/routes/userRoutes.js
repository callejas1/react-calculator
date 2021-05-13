import express from 'express'
const router = express.Router()
import { authUser, registerUser, updateCount } from '../controllers/userController.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/attempts').post(updateCount)

export default router
