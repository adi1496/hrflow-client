import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import LogoSVG from './../logo/logo-svg.jsx';
import {fetchPOST} from './../../utils/fetch.js';

const Login = ({user, handleUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const loginData = {
            email: email,
            password: password
        }

        for(let data in loginData) {
            if(!loginData[data]) {
                window.setAppMessage({
                    hidden: false,
                    error: true,
                    message: 'Please fiil all camps'
                })
                return;
            }
        }

        const response = await fetchPOST('/api/v1/auth/login', loginData);
        if(!response) return;

        localStorage.setItem('jwt', response.data.token);
        window.setAppMessage({
            hidden: false,
            error: false,
            message: 'You are logged in!'
        });

        handleUser(response.data.token);
    }

    if(user) {
        return (<Redirect to='/' />);
    }else {
        return(
        <div className="main-login">

            <div className="login">
                <div className="login__logo"><LogoSVG/></div>
        
                <div className="login__form">
                    <h4 className="login__welcome">Welcome back</h4>
    
                    <div className="login__box login__box--2x">
                        <label htmlFor="login-email" className="login__label">E-mail</label>
                        <input onChange={(event) => setEmail(event.target.value)} id="login-email" type="email" className="login__input" />
                    </div>
                    
                    <div className="login__box login__box--2x">
                        <label htmlFor="login-password" className="login__label">Password</label>
                        <input onChange={(event) => setPassword(event.target.value)} id="login-password" type="password" className="login__input" />
                    </div>
    
                    <div className="login__box login__box--2x">
                        <button className="login__button" onClick={handleLogin}>Login</button>
                    </div>
    
                    <div className="login__box login__box--2x">
                        <Link to='/forgot-password' className="login__link">Forgot Password?</Link>
                        <Link to='/register' className="login__link">Register your company now!</Link>
                    </div>
                </div>
    
            </div>
        </div>
        )

    }

}

export default Login;