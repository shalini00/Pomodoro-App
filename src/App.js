
import './App.css';
import { Switch, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import WelcomePage from './components/Layout/WelcomePage';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Timer from './components/Pomodoro/Timer';
import Settings from './components/Pomodoro/Settings';
import { useSelector } from 'react-redux';

function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Layout>
    <Switch>
      <Route path="/" exact>
            {isLoggedIn ? <Timer /> : <WelcomePage/> }
       
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/settings" exact>
          <Settings />
        </Route>
     
    </Switch>
  </Layout>
  );
}

export default App;
