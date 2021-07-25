import CreateInputFields from './createFields.jsx';

const Page2 = ({fields, handleInputChange}) => {
    return(
        <div className="onboarding__page">
            {fields.map((field, index) => {
                return <CreateInputFields key={index} field={field} handleInputChange={handleInputChange} />
            })}

            {/* <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Phone Number</label>
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
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Postal Code</label>
                <input type="text" className="onboarding__input" />
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">City</label>
                <input type="text" className="onboarding__input" />
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Address</label>
                <input type="text" className="onboarding__input" />
            </div> */}

        </div>
    )
}

export default Page2;