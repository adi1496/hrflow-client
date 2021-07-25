
const Page2 = () => {
    return(
        <div className="onboarding__page">
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Phone Number</label>
                <input type="text" className="onboarding__input" />
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Address</label>
                <input type="text" className="onboarding__input" />
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">City</label>
                <input type="text" className="onboarding__input" />
            </div>
            {/* <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Father's Name</label>
                <input type="text" className="onboarding__input" />
            </div> */}
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Postal Code</label>
                <input type="text" className="onboarding__input" />
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Country</label>
                <select className="onboarding__select" name="" id="">
                    <option value="null">Select Country</option>
                    <option value="ro">Romania</option>
                    <option value="uk">United Kingdom</option>
                    <option value="it">Italy</option>
                </select>
            </div>
            {/*
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Nationality</label>
                <input type="text" className="onboarding__input" />
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Date of Birth</label>
                <input className="onboarding__date" type="date" name="" id="" />
            </div> */}

        </div>
    )
}

export default Page2;