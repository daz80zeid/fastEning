import { FC, FormEvent, useState } from 'react';
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import InlineSVG from 'react-inlinesvg';
import { Button, Input } from '../../components';
import {login, register} from "./auth.thunks";
import Google from '../../assets/icons/google.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Done from '../../assets/icons/done.svg';
import {IUser} from "../../shared/user.interface";

interface RegistrationFormProps {
    location: string
}

export const RegistrationForm: FC<RegistrationFormProps> = ({ location }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (location === '/register') {
                await dispatch(register({ email, password })).unwrap();
                history.push('/');
            } else {
                await dispatch(login({ email, password })).unwrap();
                history.push('/main');
            }

        } catch (error) {
            console.error(error);
        }
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
                <InlineSVG type="submit" src={Done} className="h-6 w-6" />
                <Link to="/restore-password" className="text-white hover:text-gray-800">
                    Forgot password?
                </Link>
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
                    <Button type='submit' variant="primary">
                        {location === '/register' ? 'Sign up' : 'Sign in'}
                    </Button>
                </div>

            </div>
        </form>
    );
};
