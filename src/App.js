
import './App.css';
import { Switch, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import WelcomePage from './components/Layout/WelcomePage';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';

function App() {
  return (
    <Layout>
    <Switch>
      <Route path="/" exact>
         <WelcomePage />
       
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
     
    </Switch>
  </Layout>
  );
}

export default App;
