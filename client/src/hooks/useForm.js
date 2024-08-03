import { useEffect, useState } from 'react';

export function useForm(initialValues, submitCallback, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const validationErrors = validate(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        await submitCallback(values);
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        changeHandler,
        submitHandler
    };
}
