import { useEffect, useState } from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Login from './components/auth/login.jsx';
import Register from './components/auth/register.jsx';
import Application from './Application.js';

import {fetchGET} from './utils/fetch.js';

function App() {
  const [user, setUser] = useState(null);  //null
  window.setUser = setUser;

  const handleUser = async (jwt) => {
    const data = await fetchGET('/api/v1/auth/is-logged', jwt);
    setUser(data.data.user);
  }

  useEffect(() => {
    const getUser = async() => {
      const jwt = localStorage.getItem('jwt');
      let data;
      if(jwt) data = await fetchGET('/api/v1/auth/is-logged', jwt);

      if(data.status === 'fail' || data.status === 'error') return;

      setUser(data.data.user);
    }
    getUser();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Switch>
        <Route exact path='/login'>{user ? <Redirect to='/'/> : <Login user={user} handleUser={handleUser} />}</Route>
        <Route exact path='/register'>{user ? <Redirect to='/'/> : <Register/>}</Route>
        <Route>{user ? <Application user={user} /> :
            <Redirect to='/login' />}</Route>
      </Switch>
  )
}

export default App;
