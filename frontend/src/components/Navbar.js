import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {userInfo ? <Link to="/login" onClick={logoutHandler}>Log Out</Link> : <Link to="/login">Sign in</Link>}
    </div>
  )
}

export default Navbar
