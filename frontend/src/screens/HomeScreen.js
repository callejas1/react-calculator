import React from 'react'
import { useSelector } from 'react-redux'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  return (
    <>  
      <div className="App-header">
        <Navbar/>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      {!userInfo ? <Welcome/> : <Content/>}
      </div>
    </>
  )
}

export default HomeScreen
