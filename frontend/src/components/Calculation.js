import React, { useState } from 'react'
import Answer from './Answer'

const Calculation = ({ calc, id, history }) => {
  const [displayStyle, setDisplayStyle] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState('')
  
  const guessInputHandler = () => {
    setDisplayStyle(true)
    setSelectedQuestion(id)
    if(displayStyle){
      setDisplayStyle(false)
    }
  }
  
  return (
    <>
      <button className="calculation-array" onClick={guessInputHandler}>{calc}</button>
      {displayStyle && <Answer id={selectedQuestion} history={history}/>}
    </>
  )
}

export default Calculation

