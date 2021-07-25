import { useState } from "react";
import { Link } from "react-router-dom"

import {useForm} from './../../customHooks/useForm.js';
import LogoSVG from './../logo/logo-svg.jsx';
import {fetchPOST} from './../../utils/fetch.js';

const Register = () => {
    const [register, setRegister] = useForm({
        firstName: '',
        lastName: '',
        businessEmail: '',
        businessPhone: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        numberEmployees: null,
        country: '',
        city: '',
        address: '',
        postalCode: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();

        console.log(register);
        if(!register.numberEmployees) {
            window.setAppMessage({
                hidden: false,
                error: true,
                message: 'Please select numbers of Employees plan'
            });
            return;
        };

        for(let data in register) {
            if(!register[data]) {
                window.setAppMessage({
                    hidden: false,
                    error: true,
                    message: 'Please fiil all camps'
                })
                return;
            }
        }

        const response = await fetchPOST('/api/v1/auth/signup-company', register);

        if(!response) return;

        window.setAppMessage({
            hidden: false,
            error: false,
            message: 'Company registered successfully! Please check your email for verification!'
        });

        return;
    }


    return (
    <div className="main-login">
        
        <div className="login">
            <div className="login__logo"><LogoSVG/></div>
    
            <div className="login__form">
                <h4 className="login__welcome">Welcome to hrFLOW</h4>
    
                <div className="login__box">
                    <label htmlFor="firstName" className="login__label">First Name</label>
                    <input onChange={setRegister} name="firstName" id="firstName" type="text" className="login__input" />
                </div>
    
                <div className="login__box">
                    <label htmlFor="lastName" className="login__label">Last Name</label>
                    <input onChange={setRegister} id="lastName" name="lastName" type="text" className="login__input" />
                </div>
    
                <div className="login__box login__box--2x">
                    <label htmlFor="businessEmail" className="login__label">Business E-mail</label>
                    <input onChange={setRegister} id="businessEmail" name="businessEmail" type="email" className="login__input" />
                </div>

                <div className="login__box login__box--2x">
                    <label htmlFor="businessPhone" className="login__label">Business Phone</label>
                    <input onChange={setRegister} id="businessPhone" name="businessPhone" type="email" className="login__input" />
                </div>
                
                <div className="login__box login__box--2x">
                    <label htmlFor="password" className="login__label">Password</label>
                    <input onChange={setRegister} id="password" name="password" type="password" className="login__input" />
                </div>
                <div className="login__box login__box--2x">
                    <label htmlFor="confirmPassword" className="login__label">Confirm Password</label>
                    <input onChange={setRegister} id="confirmPassword" name="confirmPassword" type="password" className="login__input" />
                </div>
    
                <div className="login__box">
                    <label htmlFor="companyName" className="login__label">Company Name</label>
                    <input onChange={setRegister} id="companyName" name="companyName" type="text" className="login__input" />
                </div>
    
                <div className="login__box">
                    <label htmlFor="numberEmployees" className="login__label">Number of Employees</label>
                    <div className="login__select-div">
                        <select onChange={setRegister} id="numberEmployees" name="numberEmployees" className="login__select">
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
                    <input onChange={setRegister} id="country" name="country" type="text" className="login__input" />
                </div>
    
                <div className="login__box">
                    <label htmlFor="city" className="login__label">City</label>
                    <input onChange={setRegister} id="city" name="city" type="text" className="login__input" />
                </div>
    
                <div className="login__box login__box--2x">
                    <label htmlFor="address" className="login__label">Address</label>
                    <input onChange={setRegister} id="address" name="address" type="text" className="login__input" />
                </div>
    
                <div className="login__box">
                    <label htmlFor="postalCode" className="login__label">Postal Code</label>
                    <input onChange={setRegister} id="postalCode" name="postalCode" type="text" className="login__input" />
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