import { FC, FormEvent, useState } from 'react';
import InlineSVG from 'react-inlinesvg';
import { Button, Input } from '../../components';
import Google from '../../assets/icons/google.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Done from '../../assets/icons/done.svg';

interface RegistrationFormProps {
    onSubmit: (email: string, password: string) => void;
}

export const RegistrationForm: FC<RegistrationFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(email, password);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto py-12">
            <div className="mb-6">
                <Input label="Email" type="email" value={email} onChange={setEmail} variant="email" />
            </div>
            <div className="mb-6">
                <Input label="Password" type="password" value={password} onChange={setPassword} variant="password" />
            </div>
            <div className="flex items-center justify-between mb-6">
                <InlineSVG src={Done} className="h-6 w-6" />
                <a href="#" className="text-white hover:text-gray-800">
                    Forgot password?
                </a>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex flex-col space-y-2 w-full">
                    <Button hasIcon variant="secondary">
                        <InlineSVG src={Google} className="h-6 w-6" />
                        <span className="mx-4">Continue with Google </span>
                    </Button>
                    <Button hasIcon variant="secondary">
                        <InlineSVG src={Facebook} className="h-6 w-6" />
                        <span className="mx-2">Continue with Facebook </span>
                    </Button>
                    <Button variant="primary" type="submit">
                      Sign up
                    </Button>
                </div>

            </div>
        </form>
    );
};
