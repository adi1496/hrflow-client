import CreateInputFields from './createFields.jsx';

const Page1 = ({fields, handleInputChange}) => {
        return(
            <div className="onboarding__page">
                {fields.map((field, index) => {
                    return <CreateInputFields key={index} field={field} handleInputChange={handleInputChange} />
                })}



                {/* <div className="onboarding__form-box">
                    <label htmlFor="" className="onboarding__label">Title</label>
                    <select className="onboarding__select" name="title" id="">
                        <option value="mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                    </select>
                </div>
                <div className="onboarding__form-box">
                    <label htmlFor="" className="onboarding__label">First Name</label>
                    <input onChange={hadleChange} type="text" name="firstName" className="onboarding__input" />
                </div>
                <div className="onboarding__form-box">
                    <label htmlFor="" className="onboarding__label">Last Name</label>
                    <input type="text" name="lastName" className="onboarding__input" />
                </div>
                <div className="onboarding__form-box">
                    <label htmlFor="" className="onboarding__label">Email Address</label>
                    <input type="text" name="email" className="onboarding__input" />
                </div>
                <div className="onboarding__form-box">
                    <label htmlFor="" className="onboarding__label">Gender</label>
                    <input type="text" name="gender" className="onboarding__input" />
                </div>
                <div className="onboarding__form-box">
                    <label htmlFor="" className="onboarding__label">Martial Status</label>
                    <input type="text" name="martialStatus" className="onboarding__input" />
                </div>
                <div className="onboarding__form-box">
                    <label htmlFor="" className="onboarding__label">Nationality</label>
                    <input type="text" name="nationality" className="onboarding__input" />
                </div>
                <div className="onboarding__form-box">
                    <label htmlFor="" className="onboarding__label">Date of Birth</label>
                    <input className="onboarding__date" name="dateOfBirth" type="date" id="" />
                </div> */}

            </div>
        )

    
}

export default Page1;