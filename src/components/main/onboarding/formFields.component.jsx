import {employeePersonalInformation, employeeContact, employeeWorkInformation} from './camps.js';
import CreateInputFields from './createFields.jsx';

const FormFieldsComponent = ({page, handleInputChange}) => {
    let fields;

    if(page === 1) {
        fields = employeePersonalInformation;
    }else if(page === 2) {
        fields = employeeContact;
    }else if(page === 3) {
        fields = employeeWorkInformation;
    }

    return(
        <div className="onboarding__page">
            {fields.map((field, index) => {
                return <CreateInputFields key={index} field={field} handleInputChange={handleInputChange} />
            })}
        </div>
    )
}

export default FormFieldsComponent;