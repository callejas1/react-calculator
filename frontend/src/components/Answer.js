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
  const [failedAnswers, setFailedAnswers] = useState([])
  
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const calculationDetails = useSelector(state => state.calculationDetails)
  const { loading, error, calculation } = calculationDetails
  
  const userDetails = useSelector(state => state.userDetails)
  const { user } = userDetails
  const answers = user.answers

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
  }

  useEffect(() => {
    // fetch single answer info from DB to compare w/ user input
    dispatch(listCalculationDetails(id))
    // get user details to check how many failed attempts user has
    dispatch(getUserDetails(userInfo._id))
    if(answers && answers.length > 0){
      const incorrectAnswers = answers.filter(answer => answer.isCorrect === false)
      setFailedAnswers(incorrectAnswers)
    }  

  }, [dispatch, id, userInfo._id])

  return (
    <div className="answer-input">
      {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : message && userInput.length <= 0 && (
      <Message variant="dark">{message}</Message>
      )}
      {answers && failedAnswers.length < 5 ? (
        <>
        <label htmlFor="text">Enter your answer</label>
        <input type="number" placeholder="Guess" onChange={(e) => setUserInput(e.target.value)}/>
        <button onClick={submitHandler}>Submit</button>
        </>
      ) : <Message variant="dark">You've reached the maximum failed attempts</Message>}
    </div>
  )
}

export default Answer
