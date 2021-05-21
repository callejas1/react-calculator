import './App.css';
import { Route } from 'react-router-dom'
import Logo from './components/Logo';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import FailedScreen from './screens/FailedScreen';
import PassedScreen from './screens/PassedScreen';

function App() {

  return (
    <div className="App">
      <Route path="/passed" component={PassedScreen}/>
      <Route path="/failed" component={FailedScreen}/>
      <Logo/>
      <Route path="/login" component={LoginScreen}/>
      <Route path="/register" component={RegisterScreen}/>
      <Route path="/" component={HomeScreen} exact/>
    </div>
  );
}

export default App;
