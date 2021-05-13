import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { register } from '../actions/userActions'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error } = userRegister

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <div className="form-control">
      <Navbar/>
      {message ? (
        <Message variant="danger">{message}</Message>
        ) : 
      error && (
        <Message variant="danger">{error}</Message>
      )}
      {loading && <Loader/>}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Create password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
      </form>
    </div>
  )
}

export default RegisterScreen
