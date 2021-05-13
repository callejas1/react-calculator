import React from 'react'
import { Link } from 'react-router-dom'


const FailedScreen = () => {
  return (
    <div className="failed-passed-screen">
      <img src="./bad-math.gif" alt="error screen"/>
      <Link to="/">Return to homepage ⏎</Link>
    </div>
  )
}

export default FailedScreen
