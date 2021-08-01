import { useState } from "react";
import {Route, Redirect} from "react-router-dom";

import AppMsg from "./components/app-messages/app-msg.jsx";
import Login from './components/auth/login.jsx';
import Register from './components/auth/register.jsx';
import Application from './Application.js';

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

  // create the JWT state
  const [jwt, setJWT] = useState(localStorage.getItem('jwt'));  //null

  // handle user login
  const handleUser = async (jwt) => {
    setJWT(jwt);
  }

  return (
    // <Switch>
    <div>
        <AppMsg appMessage={appMessage} handleAppMessageBtn={handleAppMessageBtn} />
        <Route exact path='/login'>{jwt ? <Redirect to='/'/> : <Login handleUser={handleUser} />}</Route>
        <Route exact path='/register'>{jwt ? <Redirect to='/'/> : <Register/>}</Route>
        <Route path='/'>{jwt ? <Application /> : <Redirect to='/login' />}</Route>
        {/* <Route> <Application user={user} /> </Route> */}
    </div>
      // {/* </Switch> */}
  )
}

export default App;
