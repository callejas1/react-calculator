import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Calculation from '../components/Calculation'
import { listCalculations } from '../actions/calculationActions'


const HomeScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  
  const calculationList = useSelector((state) => state.calculationList)
  const { loading: loadingCalc, error: errorCalc, calculations } = calculationList

  const dispatch = useDispatch()
  
  const calculationHandler = () => {
    dispatch(listCalculations())
  } 
  
  return (
    <>  
      <div className="App-header">
        <Navbar/>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      {!userInfo ? <Welcome/> : (
        <div className="content-info">
          <div>
            <button onClick={calculationHandler} className="toggle-btn">Toggle calculations</button>
          </div>
          {loadingCalc ? (
            <Loader />
          ) : errorCalc ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
            {calculations && calculations.length > 0 && calculations.map((calc, i) => (
              <div key={calc + i}>
                <Calculation calc={calc.calculation} id={calc._id} history={history}/>
              </div>        
          ))}
          </>
        )}
        </div>
      )}
      </div>
    </>
  )
}

export default HomeScreen
