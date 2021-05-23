import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './Loader';
import Message from './Message';
import { listCalculationDetails } from '../actions/calculationActions'
import { attemptTracker, getUserDetails } from '../actions/userActions'


const Answer = ({ history, id }) => {
  const [userInput, setUserInput] = useState('')
  const [message, setMessage] = useState('')
  const [attemptCount, setAttemptCount] = useState(1)
  
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  
  const userDetails = useSelector(state => state.userDetails)
  const { answers } = userDetails

  const calculationDetails = useSelector(state => state.calculationDetails)
  const { loading, error, calculation } = calculationDetails
  
  const dispatch = useDispatch()


  const submitHandler = (e) => {
    e.preventDefault()
    const input = Number(userInput)
    const correctAnswer = calculation.calculation.correctAnswer
    const chosenCalculation = id

    if(userInput.length <= 0) {
      // if no answer is submitted throw err msg
      setMessage('An answer must be provided to continue')
    } else if(input === correctAnswer) {
      const isCorrect = true
      setAttemptCount(attemptCount + 1)
      // update count and user answer on DB
      dispatch(attemptTracker(userInfo._id, { userInput, chosenCalculation, isCorrect }, attemptCount))
      history.push("/passed")
    } else if (input !== correctAnswer){
      const isCorrect = false
      setAttemptCount(attemptCount + 1)
      // update count and user answer on DB
      dispatch(attemptTracker(userInfo._id, { userInput, chosenCalculation, isCorrect }, attemptCount))
      history.push("/failed")
    }

    dispatch(getUserDetails(userInfo._id))

  }

  useEffect(() => {
    // fetch single answer info from DB to compare w/ user input
    dispatch(listCalculationDetails(id))
    // get user details to check how many failed attempts user has
    dispatch(getUserDetails(userInfo._id))
    if(answers && answers.length > 0){
      answers
      .filter(answer => answer.isCorrect === false)
      .forEach(answer => alert(answer.isCorrect))
    }

  }, [dispatch, id, userInfo._id, answers])

  return (
    <div className="answer-input">
      {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : message && userInput.length <= 0 && (
      <Message variant="dark">{message}</Message>
      )}
      <label htmlFor="text">Enter your answer</label>
      <input type="number" placeholder="Guess" onChange={(e) => setUserInput(e.target.value)}/>
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Answer
