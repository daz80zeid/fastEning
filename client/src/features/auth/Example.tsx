import {FC, useState} from "react";
import {Modal} from "../../components";
import {RegistrationForm} from "./RegistrationForm";



export const RedirectModal: FC = () => {
    const [close, setClose] = useState(false)
    const handleClose = () => {
        setClose(true)
    }
    const handleSubmit = () => {
        console.log('submit')
    }
    return (
        <Modal onClose={handleClose} role='User' pageName='Registration'>
            <RegistrationForm onSubmit={handleSubmit}/>
        </Modal>
    )
};
