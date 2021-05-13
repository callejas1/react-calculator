import './App.css';
import { Route } from 'react-router-dom'
import Logo from './components/Logo';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import FailedScreen from './screens/FailedScreen';

function App() {

  return (
    <>
    <Route path="/failed" exact component={FailedScreen}/>
      <Route path="/login" exact>
        <div className="App">
          <Logo/>
          <LoginScreen/>
        </div>
      </Route>
      <Route path="/register" exact>
        <div className="App">
          <Logo/>
          <RegisterScreen/>
        </div>
      </Route>
      <Route path="/" exact>
        <div className="App">
          <Logo/>
          <HomeScreen/>
        </div>
      </Route>
    </>
  );
}

export default App;
