import React from 'react'
import { Link } from 'react-router-dom'

const FailedScreen = () => {
  return (
    <div className="error-screen">
      <img src="./bad-math.gif" alt="error screen"/>
      <h3>You've ran out of attempts</h3>
      <Link to="/">Return to homepage ⏎</Link>
    </div>
  )
}

export default FailedScreen
