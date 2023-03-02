import { useState } from 'react';
import * as Yup from 'yup';

type Variant = 'email' | 'password' | 'username'| 'name';

export const useValidation = (value: string, variant: Variant) => {
    const [error, setError] = useState("");

    const validationSchema = {
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Please enter an email'),
        password: Yup.string()
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*#?&]{8,}$/,
                'Password must contain at least 8 characters, 1 capital letter, and 1 number'
            )
            .required('Please enter a password'),
        username: Yup.string()
            .min(1, 'Username must be at least 1 characters long')
            .max(20, 'Username cannot be longer than 20 characters')
            .matches(
                /^[a-zA-Z0-9_]*$/,
                'Only alphanumeric and underscore characters are allowed'
            )
            .required('Please enter a username'),
        name: Yup.string()
            .min(1, 'Name must be at least 1 characters long')
            .max(40, 'Name cannot be longer than 40 characters')
            .matches(
                /^[a-zA-Z0-9_]*$/,
                'Only alphanumeric and underscore characters are allowed'
            )
            .required('Please enter a username'),
    }[variant];

    const validate = (value: string) => {
        try {
            validationSchema.validateSync(value);
            setError("");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return [error, validate] as const;
};
