
const Onboarding = () => {
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
                    <div className="onboarding__form-box">
                        <label htmlFor="" className="onboarding__label">Title</label>
                        <select className="onboarding__select" name="" id="">
                            <option value="mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Mrs.">Mrs.</option>
                        </select>
                    </div>
                    <div className="onboarding__form-box">
                        <label htmlFor="" className="onboarding__label">First Name</label>
                        <input type="text" className="onboarding__input" />
                    </div>
                    <div className="onboarding__form-box">
                        <label htmlFor="" className="onboarding__label">Last Name</label>
                        <input type="text" className="onboarding__input" />
                    </div>
                    <div className="onboarding__form-box">
                        <label htmlFor="" className="onboarding__label">Father's Name</label>
                        <input type="text" className="onboarding__input" />
                    </div>
                    <div className="onboarding__form-box">
                        <label htmlFor="" className="onboarding__label">Email Address</label>
                        <input type="text" className="onboarding__input" />
                    </div>
                    <div className="onboarding__form-box">
                        <label htmlFor="" className="onboarding__label">Gender</label>
                        <input type="text" className="onboarding__input" />
                    </div>
                    <div className="onboarding__form-box">
                        <label htmlFor="" className="onboarding__label">Martial Status</label>
                        <input type="text" className="onboarding__input" />
                    </div>
                    <div className="onboarding__form-box">
                        <label htmlFor="" className="onboarding__label">Nationality</label>
                        <input type="text" className="onboarding__input" />
                    </div>
                    <div className="onboarding__form-box">
                        <label htmlFor="" className="onboarding__label">Date of Birth</label>
                        <input className="onboarding__date" type="date" name="" id="" />
                    </div>

                    <div className="onboarding__buttons">
                        <button className="onboarding__button onboarding__button--back">Back</button>
                        <button className="onboarding__button onboarding__button--next">Next</button>
                    </div>
                </form>


            </div>
    )
}

export default Onboarding;