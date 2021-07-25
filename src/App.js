import { useEffect, useState } from "react";
import {Route, Redirect} from "react-router-dom";

import AppMsg from "./components/app-messages/app-msg.jsx";
import Login from './components/auth/login.jsx';
import Register from './components/auth/register.jsx';
import Application from './Application.js';

import {fetchGET} from './utils/fetch.js';

function App() {
  // App Message container
  const [appMessage, setAppMessage] = useState({
    hidden: true,
    error: false,
    message: '',
});
// console.log(appMessage);
window.setAppMessage = setAppMessage;
const handleAppMessageBtn = event => {
    event.preventDefault();
    setAppMessage({
        hidden: true,
        error: false,
        message: ''
    })
}
//


  const [user, setUser] = useState(null);  //null
  window.setUser = setUser;

  const handleUser = async (jwt) => {
    const data = await fetchGET('/api/v1/auth/is-logged', jwt);
    setUser(data.data.user);
  }

  useEffect(() => {
    const getUser = async() => {
      const jwt = localStorage.getItem('jwt');
      if(!jwt) return; 
      const data = await fetchGET('/api/v1/auth/is-logged', jwt);

      if(!data) {
        localStorage.removeItem('jwt');
        return;
      };

      setUser(data.data.user);
    }
    getUser();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    // <Switch>
    <div>
        <AppMsg appMessage={appMessage} handleAppMessageBtn={handleAppMessageBtn} />
        <Route exact path='/login'>{user ? <Redirect to='/'/> : <Login user={user} handleUser={handleUser} />}</Route>
        <Route exact path='/register'>{user ? <Redirect to='/'/> : <Register/>}</Route>
        <Route path='/'>{user ? <Application user={user} /> : <Redirect to='/login' />}</Route>
        {/* <Route> <Application user={user} /> </Route> */}
    </div>
      // {/* </Switch> */}
  )
}

export default App;
