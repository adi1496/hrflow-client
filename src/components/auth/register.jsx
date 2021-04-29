import { useState } from "react";
import { Link } from "react-router-dom"

import LogoSVG from './../logo/logo-svg.jsx';
import {fetchPOST} from './../../utils/fetch.js';
import AppMsg from './../app-messages/app-msg.jsx';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [businessPhone, setbusinessPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [numberEmployees, setNumberEmployees] = useState(null);
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const [appMessage, setAppMessage] = useState({
        hidden: true,
        error: false,
        message: '',
    });

    const handleAppMessageBtn = event => {
        event.preventDefault();
        setAppMessage({
            hidden: true,
            error: false,
            message: ''
        })
    }


    const handleSubmit = async event => {
        event.preventDefault();
        if(!numberEmployees) {
            setAppMessage({
                hidden: false,
                error: true,
                message: 'Please select numbers of Employees plan'
            });
            return;
        };

        const registerData = {
            firstName,
            lastName,
            businessEmail,
            businessPhone,
            password,
            confirmPassword,
            companyName,
            numberEmployees,
            country,
            city,
            address,
            postalCode,
        }

        for(let data in registerData) {
            if(!registerData[data]) {
                setAppMessage({
                    hidden: false,
                    error: true,
                    message: 'Please fiil all camps'
                })
                return;
            }
        }

        const response = await fetchPOST('/api/v1/auth/signup-company', registerData);

        if(response.status === 'fail' || response.status === 'error') return setAppMessage({
            hidden: false,
            error: true,
            message: response.message
        });

        setAppMessage({
            hidden: false,
            error: false,
            message: 'Company registered successfully! Please check your email for verification!'
        });

        return;
    }


    return (
    <div className="main-login">
        <AppMsg appMessage={appMessage} handleAppMessageBtn={handleAppMessageBtn} />
        <div className="login">
            <div className="login__logo"><LogoSVG/></div>
    
            <div className="login__form">
                <h4 className="login__welcome">Welcome to hrFLOW</h4>
    
                <div className="login__box">
                    <label htmlFor="first-name" className="login__label">First Name</label>
                    <input onChange={e => setFirstName(e.target.value)} id="first-name" type="text" className="login__input" />
                </div>
    
                <div className="login__box">
                    <label htmlFor="last-name" className="login__label">Last Name</label>
                    <input onChange={e => setLastName(e.target.value)} id="last-name" type="text" className="login__input" />
                </div>
    
                <div className="login__box login__box--2x">
                    <label htmlFor="business-email" className="login__label">Business E-mail</label>
                    <input onChange={e => setBusinessEmail(e.target.value)} id="business-email" type="email" className="login__input" />
                </div>

                <div className="login__box login__box--2x">
                    <label htmlFor="business-phone" className="login__label">Business Phone</label>
                    <input onChange={e => setbusinessPhone(e.target.value)} id="business-phone" type="email" className="login__input" />
                </div>
                
                <div className="login__box login__box--2x">
                    <label htmlFor="password" className="login__label">Password</label>
                    <input onChange={e => setPassword(e.target.value)} id="password" type="password" className="login__input" />
                </div>
                <div className="login__box login__box--2x">
                    <label htmlFor="confirm-password" className="login__label">Confirm Password</label>
                    <input onChange={e => setConfirmPassword(e.target.value)} id="confirm-password" type="password" className="login__input" />
                </div>
    
                <div className="login__box">
                    <label htmlFor="company-name" className="login__label">Company Name</label>
                    <input onChange={e => setCompanyName(e.target.value)} id="company-name" type="text" className="login__input" />
                </div>
    
                <div className="login__box">
                    <label htmlFor="num-employees" className="login__label">Number of Employees</label>
                    <div className="login__select-div">
                        <select onChange={e => setNumberEmployees(e.target.value)} id="num-employees" className="login__select">
                        <option value="" defaultValue>Select</option>
                            <option value="0-20">0-20</option>
                            <option value="20-100">20-100</option>
                            <option value="100-500">100-500</option>
                            <option value="500+">500+</option>
                        </select>
                    </div>
                </div>
    
                <div className="login__box">
                    <label htmlFor="country" className="login__label">Country</label>
                    <input onChange={e => setCountry(e.target.value)} id="country" type="text" className="login__input" />
                </div>
    
                <div className="login__box">
                    <label htmlFor="city" className="login__label">City</label>
                    <input onChange={e => setCity(e.target.value)} id="city" type="text" className="login__input" />
                </div>
    
                <div className="login__box login__box--2x">
                    <label htmlFor="address" className="login__label">Address</label>
                    <input onChange={e => setAddress(e.target.value)} id="address" type="text" className="login__input" />
                </div>
    
                <div className="login__box">
                    <label htmlFor="postal-code" className="login__label">Postal Code</label>
                    <input onChange={e => setPostalCode(e.target.value)} id="postal-code" type="text" className="login__input" />
                </div>
    
                <div className="login__box login__box--2x">
                    <button onClick={handleSubmit} className="login__button">Register</button>
                </div>
    
                <div className="login__box login__box--2x">
                    <Link to='/login' className="login__link">Already have an account? Login</Link>
                </div>
            </div>
    
        </div>

    </div>
    )
}

export default Register