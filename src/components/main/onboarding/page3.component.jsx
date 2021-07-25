
const Page3 = () => {
    return(
        <div className="onboarding__page">
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Departament</label>
                <select className="onboarding__select" name="" id="">
                    <option value="sales">Sales</option>
                    <option value="dev">Develompent</option>
                    <option value="marketing">Marketing</option>
                </select>
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Position</label>
                <select className="onboarding__select" name="" id="">
                    <option value="js">JS Dev</option>
                    <option value="react">React Dev</option>
                    <option value="c++">C++ Dev</option>
                </select>
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Start Date</label>
                <input className="onboarding__date" type="date" name="" id="" />
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Time(months)</label>
                <input type="number" className="onboarding__input" />
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Salary</label>
                <input type="number" className="onboarding__input" />
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Bank Name</label>
                <input type="text" className="onboarding__input" />
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Bank Account Name</label>
                <input type="text" className="onboarding__input" />
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Bank IBAN</label>
                <input type="text" className="onboarding__input" />
            </div>
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">Contract(not finished)</label>
                <input type="text" className="onboarding__input" />
            </div>
            

        </div>
    )
}

export default Page3;