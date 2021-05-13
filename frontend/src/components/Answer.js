import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './Loader';
import Message from './Message';
import { listCalculationDetails } from '../actions/calculationActions'
import { attemptsTracker } from '../actions/userActions'


const Answer = ({ displayStyle, id }) => {
  const [userInput, setUserInput] = useState('')
  const [message, setMessage] = useState('')
  const [failed, setFailed] = useState('')
  const [passed, setPassed] = useState('')
  const [attemptCount, setAttemptCount] = useState(0)
  
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  
  const calculationDetails = useSelector(state => state.calculationDetails)
  const { loading, error, calculation } = calculationDetails
  
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    const input = Number(userInput)
    const correctAnswer = calculation.calculation.correctAnswer
    const chosenCalculation = id

    if(userInput.length <= 0) {
      setMessage('An answer must be provided to continue')
    } else if(input === correctAnswer) {
      setPassed('Correct! ✅')
      setAttemptCount(attemptCount + 1)
    } else if (input !== correctAnswer){
      setFailed('Incorrect ❌')
      setAttemptCount(attemptCount + 1)
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
      {passed ? <Message variant="dark">{passed}</Message> : failed && <Message variant="dark">{failed}</Message>}  
    </div>
  )
}

export default Answer
