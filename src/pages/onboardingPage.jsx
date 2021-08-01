// import { Switch, Route } from 'react-router-dom';
import { useState } from "react";

import FormFieldsComponent from '../components/main/onboarding/formFields.component.jsx';
// import Page2 from './page2.component.jsx';
// import Page3 from './page3.component.jsx';

const Onboarding = () => {
    const [page, setPage] = useState(1);

    const handleNext = (e) => {
        e.preventDefault();
        if(page < 3) setPage(page + 1);
        console.log(page);
    }

    const handleBack = (e) => {
        e.preventDefault();
        if(page > 1) setPage(page - 1);
        console.log(page);
    }

    const handleFinish = (e) => {
        e.preventDefault();
        console.log('You have finished the form completion');
    }

    const initialState = {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        martialStatus: '',
        nationality: '',
        dateOfBirth: '',
        phone: '',
        country: '',
        postalCode: '',
        city: '',
        address: ''
    }

    const [eachEntry, setEachEntry] = useState(initialState);

    const handleInputChange = (e) => {
        eachEntry[e.target.name] = e.target.value;
        setEachEntry(eachEntry);
        console.log(eachEntry);
    }
    // const {register} = useForm();

    return(
        <div className="onboarding">
                <h2 className="onboarding__title">Onboarding for <span>Adrian</span></h2>

                <div className="onboarding__progress">
                    <div className={`onboarding__progress-bar onboarding__progress-bar--${page}`}></div>
                </div>

                <figure className="onboarding__photo">
                    <img src="img/contract.png" alt="contract-img" className="onboarding__img" />
                </figure>

                <form className="onboarding__form" action="">
                    <FormFieldsComponent page={page} handleInputChange={handleInputChange} />

                    <div className="onboarding__buttons">
                        <button className={`onboarding__button onboarding__button--${page === 1 ? 'hide' : 'back'}`} onClick={handleBack}>Back</button>
                        <button className={`onboarding__button onboarding__button--${page === 3 ? 'finish' : 'next'}`} onClick={page === 3 ? handleFinish : handleNext}>{page === 3 ? 'Finish' : 'Next'}</button>
                    </div>
                </form>


            </div>
    )
}

export default Onboarding;