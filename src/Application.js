import { Switch, Route } from 'react-router-dom';
import Header from './components/header+nav/header.jsx';
import UserNavigation from './components/header+nav/user-nav.jsx';
import MyProfile from './components/main/my-profile.jsx';
import Onboarding from './components/main/onboarding.jsx';

const Application = (props) => {
    
    return (
        <div className='body-container'>
            <Header />
            <UserNavigation />
            <div className="main">
                <Switch>
                    <Route exact path='/my-profile'><MyProfile /></Route>
                    <Route exact path='/onboarding'><Onboarding /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Application;