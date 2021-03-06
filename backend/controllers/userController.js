import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Add attempt count and user input 
// @route   POST /api/users/attempts
// @access  Private
const updateCount = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body.id)

  if (user) {
    user.answers.push(req.body.answers)
    user.numberOfAttempts += req.body.numberOfAttempts
    const updatedUser = await user.save()

    res.json({
      numberOfAttempts: updatedUser.numberOfAttempts,
      answers: updatedUser.answers
    })
  } else {
    res.status(404)
    throw new Error('User not found', req.body.id)
  }
})

// @desc Get user details
// @route GET /api/users/:id
// @access Private
const getUserInfo = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if(user){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      numberOfAttempts: user.numberOfAttempts,
      answers: user.answers
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }

})


export { authUser, getUserInfo, registerUser, updateCount }