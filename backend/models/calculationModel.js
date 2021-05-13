import mongoose from 'mongoose'

const calculationSchema = mongoose.Schema(
  {
    calculation: {
      type: String,
      required: true,
    },
    correctAnswer: {
      type: Number,
      required: true,
    },
  }
)

const Calculation = mongoose.model('Calculation', calculationSchema)

export default Calculation