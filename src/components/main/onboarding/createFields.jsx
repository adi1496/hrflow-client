
const CreateInputFields = ({field, handleInputChange}) => {
    if(field.type === 'select') {
        return(
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">{field.display}</label>
                <select className="onboarding__select" onChange={handleInputChange} name={field.name}>
                    <option value="" defaultValue>Select an option</option>
                    {field.values.map((val, index) => {
                        return <option key={index} value={val}>{val}</option>
                    })}
                </select>
            </div>
        )
    }else if(field.type === 'date') {
        return(
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">{field.display}</label>
                <input className="onboarding__date" onChange={handleInputChange} name={field.name} type={field.type} />
            </div>
        )
    }else {
        return(
            <div className="onboarding__form-box">
                <label htmlFor="" className="onboarding__label">{field.display}</label>
                <input className="onboarding__input" onChange={handleInputChange} name={field.name} type={field.type} />
            </div>
        )
    }
}

export default CreateInputFields;