import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="intro">
      <h1>Welcome to Algorhythm</h1>
      <p>You will be given a list of 5 calculations so you can guess their output and submit it to our database.</p>
      <p>There's a maximum of 3 attempts to get your answer right.</p>
      <p>In order to keep track of your progress you will need to <Link to="/register">Sign Up</Link> for an account or <Link to="/login">Sign in</Link> if you've already done so.</p>
      <p>Have fun!</p>      
    </div>
  )
}

export default Welcome
