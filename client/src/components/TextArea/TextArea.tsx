import {ChangeEvent, FC, TextareaHTMLAttributes} from 'react';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
};

export const TextArea: FC<TextAreaProps> = ({ label, ...rest }) => {

    return (
        <div className="flex flex-col my-4">
            <label className="font-medium text-white text-gray-700 mb-2">{label}</label>
            <textarea
                className="border border-gray-300 rounded-md py-2 px-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...rest}
            />
        </div>
    );
};

