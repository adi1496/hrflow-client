import { useEffect, useState } from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Login from './components/auth/login.jsx';
import Register from './components/auth/register.jsx';
import Application from './Application.js';

function App() {
  const [user, setUser] = useState(null);  //null

  useEffect(() => {
    console.log('effect');
    if(localStorage.getItem('userHR')) setUser(localStorage.getItem('userHR'));
  })

  return (
      <Switch>
        <Route exact path='/login' render={() => user ? <Redirect to='/'/> : <Login/>} />
        <Route exact path='/register' render={() => user ? <Redirect to='/'/> : <Register/>} />
        <Route>{user ? <Application user={user} />: <Redirect to='/login' />}</Route>
      </Switch>
  )
  
  // return <Login />
}

export default App;
