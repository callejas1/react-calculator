
import express from 'express'
import { getCalculations, getCalculationById } from '../controllers/calculationController.js'

const router = express.Router()

router.route('/').get(getCalculations)
router.route('/:id').get(getCalculationById)

export default router
