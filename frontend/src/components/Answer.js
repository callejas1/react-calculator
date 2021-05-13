import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './Loader';
import Message from './Message';
import { listCalculationDetails } from '../actions/calculationActions'
import { attemptsTracker } from '../actions/userActions'


const Answer = ({ displayStyle, id }) => {
  const [userInput, setUserInput] = useState('')
  const [message, setMessage] = useState('')
  const [attemptCount, setAttemptCount] = useState(1)
  
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  
  const calculationDetails = useSelector(state => state.calculationDetails)
  const { loading, error, calculation } = calculationDetails
  
  const dispatch = useDispatch()


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(userInfo.numberOfAttempts)
    const input = Number(userInput)
    const correctAnswer = calculation.calculation.correctAnswer
    const chosenCalculation = id

    if(userInput.length <= 0) {
      setMessage('An answer must be provided to continue')
    } else if(input === correctAnswer) {
      document.location.href = "/passed"
    } else if (input !== correctAnswer){
      setAttemptCount(attemptCount + 1)
      document.location.href = "/failed"
      dispatch(attemptsTracker(userInfo._id, { userInput, chosenCalculation }, attemptCount))
    }
  }

  useEffect(() => {
    dispatch(listCalculationDetails(id))
  }, [dispatch, id])

  return (
    <div className="answer-input" style={{display: displayStyle}}>
      <label htmlFor="text">Enter your answer</label>
      <input type="number" placeholder="Guess" onChange={(e) => setUserInput(e.target.value)}/>
      <button onClick={submitHandler}>Submit</button>
      {loading ? <Loader/> : error && <Message variant="danger">{error}</Message>}
      {message && userInput.length <= 0 && <Message variant="dark">{message}</Message>}
    </div>
  )
}

export default Answer
