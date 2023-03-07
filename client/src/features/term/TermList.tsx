import {FC, Suspense, useEffect} from "react";
import {Card, Loader} from "../../components";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getTerms} from "./term.action";
import {AppDispatch} from "../../store/store";

export const TermsList: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const terms = useTypedSelector((state => state.terms.terms))
    useEffect(() => {
        dispatch(getTerms());
    }, []);


    return (
        <Suspense fallback={<Loader/>}>
            <div className=" px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {terms.map((term) => (
                    <Card key={term._id} item={term} variant="primary" />
                ))}
            </div>
        </Suspense>
    );
};