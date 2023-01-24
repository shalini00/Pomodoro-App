
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
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
          {isLoggedIn ? <Timer /> : <WelcomePage />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        {isLoggedIn &&
          (
            <Route path="/settings" exact>
              <Settings />
            </Route>
          )
        }

        <Route path='*'>
          <Redirect to='/' />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
