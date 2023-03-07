import {FC, useState} from "react";
import {Modal} from "../../components";
import {RegistrationForm} from "./RegistrationForm";
import {useHistory, useLocation} from "react-router-dom";


export const RegistrationModal: FC = () => {
    const [close, setClose] = useState(false)
    const location = useLocation();
    const history = useHistory();
    const handleClose = () => {
        setClose(true)
    }

    const handleRedirect = () => {
        if (location.pathname === '/register') {
            history.push('/login')
        } else {
            history.push('/register')
        }
    }

    return (
        <Modal handleRedirect={handleRedirect} onClose={handleClose} role='User' pageName={location.pathname === '/register' ? 'Registration' : 'Login'}>
            <RegistrationForm location={location.pathname}/>
        </Modal>
    )
};
