import {ChangeEvent, FC} from 'react';
import classNames from 'classnames';
import {useValidation} from "../../hooks/useValidation";

type InputProps = {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
    value: string;
    onChange: (value: string) => void;
    variant?: 'email' | 'password' | 'username' | 'name';
};

export const Input: FC<InputProps> = ({
                                          label,
                                          placeholder,
                                          type = 'text',
                                          value,
                                          onChange,
                                          variant = 'email',
                                      }) => {
    const [error, validate] = useValidation(value, variant);
    const inputClasses = classNames(
        'block w-full px-4 py-2 mt-2 rounded-md transition-colors duration-300 border-gray-300 focus:border-blue-500 focus:ring-0',
        {
            'border-red-500': error,
        }
    );

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange(newValue);
        validate(newValue);
    };

    return (
        <>
        <div className="mb-4">
            {label && (
                <label className="block text-gray-700 text-white font-bold mb-2" htmlFor={label}>
                    {label}
                </label>
            )}
            <input
                className={inputClasses}
                id={label}
                type={type}
                placeholder={placeholder}
                value={value}
                aria-invalid={!!error}
                onChange={handleChange}
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
        </>
    );
};
