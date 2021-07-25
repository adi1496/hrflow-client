import { useState } from "react";
import Page1 from './page1.component.jsx';
import Page2 from './page2.component.jsx';
import Page3 from './page3.component.jsx';

const Onboarding = () => {
    const [page, setPage] = useState(1);

    const [title, setTitle] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [fatherName]

    const pages = {
        1: Page1,
        2: Page2,
        3: Page3
    }

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

    return(
        <div className="onboarding">
                <h2 className="onboarding__title">Onboarding for <span>Adrian</span></h2>

                <div className="onboarding__progress">
                    <div className="onboarding__progress-bar"></div>
                </div>

                <figure className="onboarding__photo">
                    <img src="img/contract.png" alt="contract-img" className="onboarding__img" />
                </figure>

                <form className="onboarding__form" action="">
                    {`${pages[page]}`}

                    <div className="onboarding__buttons">
                        <button className="onboarding__button onboarding__button--back" onClick={handleBack}>Back</button>
                        <button className="onboarding__button onboarding__button--next" onClick={handleNext}>Next</button>
                    </div>
                </form>


            </div>
    )
}

export default Onboarding;