import asyncHandler from 'express-async-handler'
import Calculation from '../models/calculationModel.js'

// @desc    Get all calculations
// @route   GET /api/calculations
// @access  Private
const getCalculations = asyncHandler(async (req, res) => {
  const calculations = await Calculation.find({})
  res.json({calculations})
})

// @desc    Get calculation by ID
// @route   GET /api/calculations/:id
// @access  Private
const getCalculationById = asyncHandler(async (req, res) => {
  const calculation = await Calculation.findById(req.params.id)
  if (calculation) {
    res.json({calculation})
  } else {
    res.status(404)
    throw new Error('Calculation not found')
  }
})

export { getCalculations, getCalculationById }