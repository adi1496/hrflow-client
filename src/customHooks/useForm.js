import { useState } from "react"

export const useForm = initialState => {
    const [values, setValues] = useState(initialState);

    console.log(values);

    return [
        values,
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ]

}

// export default useForm;