import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Calculation from './Calculation'
import Message from './Message'
import Loader from './Loader'
import { listCalculations } from '../actions/calculationActions'


const Content = () => {
  const calculationList = useSelector((state) => state.calculationList)
  const { loading, error, calculations } = calculationList
  
  const dispatch = useDispatch()

  const calculationHandler = () => {
    dispatch(listCalculations())
  } 

  return (
    <div className="content-info">
      <div>
        <button onClick={calculationHandler} className="toggle-btn">Toggle calculations</button>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        {calculations && calculations.length > 0 && calculations.map((calc, i) => (
          <div key={calc + i}>
            <Calculation calc={calc.calculation} id={calc._id}/>
          </div>        
      ))}
      </>
    )}
    </div>
  )
}

export default Content