import {ChangeEvent, FormEvent, useState} from "react";

interface IRegistrationPayload {
    email: string;
    username: string;
    password: string;
}

type TLoginPayload = Omit<IRegistrationPayload, "email">

interface IUseFormData {
    onRegister: (data: IRegistrationPayload) => void;
    onLogin: (data: TLoginPayload) => void;
}

export const useFormData = ({onRegister, onLogin}: IUseFormData)  => {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isRegister) {
            onRegister({ email, username, password });
        } else {
            onLogin({ username: loginUsername, password: loginPassword });
        }
    };

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (isRegister) {
            setUsername(event.target.value);
        } else {
            setLoginUsername(event.target.value);
        }
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (isRegister) {
            setPassword(event.target.value);
        } else {
            setLoginPassword(event.target.value);
        }
    };
    return {handlePasswordChange, handleUsernameChange, handleSubmit}
}