import React from 'react'
import { Link } from 'react-router-dom'

const PassedScreen = () => {
  return (
    <div className="failed-passed-screen">
      <img src="./thank-you-page.jpeg" alt="thank you gif"/>
      <Link to="/">Return to homepage ⏎</Link>
    </div>
  )
}

export default PassedScreen
