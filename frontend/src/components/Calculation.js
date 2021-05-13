import React, { useState } from 'react'
import Answer from './Answer'

const Calculation = ({ calc, id }) => {
  const [displayStyle, setDisplayStyle] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState('')

  const guessInputHandler = () => {
    setDisplayStyle(true)
    setSelectedQuestion(id)
    if(displayStyle){
      setDisplayStyle(false)
    }
  }

  const changeDisplayStyle = displayStyle ? "block" : "none"
  
  return (
    <>
      <button className="calculation-array" onClick={guessInputHandler}>{calc}</button>
      <Answer displayStyle={changeDisplayStyle} id={selectedQuestion} />
    </>
  )
}

export default Calculation

