import React from 'react'
import { Link } from 'react-router-dom'


const FailedScreen = () => {
  return (
    <div className="failed-passed-screen">
      <img src="./bad-math.gif" alt="error screen"/>
      <h1>Sorry, that was incorrect.</h1>
      <Link to="/">Return to homepage ⏎</Link>
    </div>
  )
}

export default FailedScreen
