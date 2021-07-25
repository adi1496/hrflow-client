
const Page1 = () => {
        return(
            <div className="onboarding__page">
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
                {/* <div className="onboarding__form-box">
                    <label htmlFor="" className="onboarding__label">Father's Name</label>
                    <input type="text" className="onboarding__input" />
                </div> */}
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

            </div>
        )

    
}

export default Page1;