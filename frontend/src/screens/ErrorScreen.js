import React from 'react'
import { Link } from 'react-router-dom'

const ErrorScreen = () => {
  return (
    <div className="error-screen">
      <img src='./404.gif' alt="failed attempts"/>
      <Link to="/">Return to homepage ⏎</Link>
    </div>
  )
}

export default ErrorScreen
