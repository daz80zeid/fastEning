import {FC} from "react";
import {Button} from "../../components";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import {createTerm} from "./term.action";
export const Terms: FC = () => {
    const history = useHistory()
    const dispatch = useDispatch<AppDispatch>()
    const handleNavigate =() => {
        dispatch(createTerm())
        history.push('/terms/new')
    }
    return (
        <div>
         <Button type="button" onClick={handleNavigate}>
             Create new term
         </Button>
        </div>
    );
};
