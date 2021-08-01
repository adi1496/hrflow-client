
export const employeePersonalInformation = [
    {
        display: 'Title',
        name: 'title',
        type: 'select',
        values: ['Mr.', 'Ms.', 'Mrs.']
    },
    {
        display: 'First Name',
        name: 'firstName',
        type: 'text',
    },
    {
        display: 'Last Name',
        name: 'lastName',
        type: 'text',
    },
    {
        display: 'Gender',
        name: 'gender',
        type: 'select',
        values: ['male', 'female', 'other']
    },
    {
        display: 'Martial Status',
        name: 'martialStatus',
        type: 'select',
        values: ['single', 'married', 'separated', 'divorced']
    },
    {
        display: 'Nationality',
        name: 'nationality',
        type: 'text',
    },
    {
        display: 'Date of Birth',
        name: 'dateOfBirth',
        type: 'date',
    },
]

export const employeeContact = [
    {
        display: 'Phone Number',
        name: 'phone',
        type: 'text',
    },
    {
        display: 'Country',
        name: 'country',
        type: 'select',
        values: ['Romania', 'United Kingdom', 'Italy', 'Germany']
    },
    {
        display: 'Postal Code',
        name: 'postalCode',
        type: 'text',
    },
    {
        display: 'City',
        name: 'city',
        type: 'text',
    },
    {
        display: 'Address',
        name: 'address',
        type: 'text',
    },
]

export const employeeWorkInformation = [
    {
        display: 'Department',
        name: 'department',
        type: 'select',
        values: ['sales', 'development', 'marketing']
    },
    {
        display: 'Position',
        name: 'position',
        type: 'select',
        values: ['js dev', 'C++ dev', 'react dev']
    },
    {
        display: 'Start Contract Date',
        name: 'joiningDate',
        type: 'date',
    },
    {
        display: 'Time contract (months)',
        name: 'timeMonths',
        type: 'number',
    },
    {
        display: 'Salary',
        name: 'salary',
        type: 'number',
    },
    {
        display: 'Bank Name',
        name: 'bankName',
        type: 'text',
    },
    {
        display: 'Bank Account Name',
        name: 'bankAccountName',
        type: 'text',
    },
    {
        display: 'Bank IBAN',
        name: 'bankAccountNumber',
        type: 'text',
    },
]

// const camps = {
//     employeePersonalInformation,
//     employeeContact,
//     employeeWorkInformation
// }

// export default camps;