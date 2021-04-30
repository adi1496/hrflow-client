import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header+nav/header.jsx';
import UserNavigation from './components/header+nav/user-nav.jsx';
import MyProfile from './components/main/profile/my-profile.jsx';
import Onboarding from './components/main/onboarding/onboarding.jsx';
import AppMsg from './components/app-messages/app-msg.jsx';

const Application = ({user}) => {

    const [appMessage, setAppMessage] = useState({
        hidden: true,
        error: false,
        message: '',
    });
    window.setAppMessage = setAppMessage;
    const handleAppMessageBtn = event => {
        event.preventDefault();
        setAppMessage({
            hidden: true,
            error: false,
            message: ''
        })
    }
    
    return (
        <div className='body-container'>
            <AppMsg appMessage={appMessage} handleAppMessageBtn={handleAppMessageBtn} />
            <Header user={user} />
            <UserNavigation user={user} />
            <div className="main">
                <Switch>

                    <Route exact path='/my-profile'>
                        <MyProfile user={user} />
                    </Route>
                    <Route exact path='/onboarding'>
                        <Onboarding />
                    </Route>

                </Switch>
            </div>
        </div>
    )
}

export default Application;