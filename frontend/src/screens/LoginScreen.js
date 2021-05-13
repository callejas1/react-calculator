import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  
  return (
    <div className="form-control">
      <Navbar/>
      {error && <Message variant="danger">{error}</Message>} 
      {loading && <Loader/>}
      {!userInfo ? (
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        <div>
          <p>No registered yet? <Link to='/register'>Sign up!</Link></p>
        </div>
      </form>
      ) : <h1>You're currently logged in.</h1>}
    </div>
  )
}

export default LoginScreen
