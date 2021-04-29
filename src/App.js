import { useEffect, useState } from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Login from './components/auth/login.jsx';
import Register from './components/auth/register.jsx';
import Application from './Application.js';

function App() {
  const [user, setUser] = useState(null);  //null
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   console.log('effect');
  //   if(localStorage.getItem('userHR')) setUser(localStorage.getItem('userHR'));
  // },[])

  const handleUser = (jwt) => {
    setUser(jwt);
  }

  return (
    <Switch>
        <Route exact path='/login'>{user ? <Redirect to='/'/> : <Login handleUser={handleUser} />}</Route>
        <Route exact path='/register'>{user ? <Redirect to='/'/> : <Register/>}</Route>
        <Route>{user ? <Application user={user} />: <Redirect to='/login' />}</Route>
      </Switch>
  )
}

export default App;
