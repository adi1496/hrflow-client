import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header+nav/header.jsx';
import UserNavigation from './components/header+nav/user-nav.jsx';
import MyProfile from './components/main/profile/my-profile.jsx';
import Onboarding from './pages/onboardingPage.jsx';
import {fetchGET} from './utils/fetch.js';

const Application = () => {

    const [user, setUser] = useState(null);  //null
    window.setUser = setUser;

    useEffect(() => {
        (async () =>  {
            const jwt = localStorage.getItem('jwt');
            if(!jwt) return; 

            const data = await fetchGET('/api/v1/auth/is-logged', jwt);
        
            if(!data) {
                localStorage.removeItem('jwt');
                return;
            };
        
            setUser(data.data.user);
        })();
    }, []);

    // Return container
    if(user){
        return (
            <div className='body-container'>
                <Header user={user} />
                <UserNavigation user={user} />
                <div className="main">
                    <Switch>
    
                        <Route path='/my-profile'>
                            <MyProfile user={user} />
                        </Route>
                        <Route exact path='/onboarding'>
                            <Onboarding />
                        </Route>
    
                    </Switch>
                </div>
            </div>
        )
    }else {
        return <></>
    }
}

export default Application;