import {FC, Suspense, useEffect} from "react";
import {Card, Loader} from "../../components";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {getArticles} from "./article.action";
import {AppDispatch} from "../../store/store";

export const Articles: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const articles = useTypedSelector((state => state.article.articles))
    useEffect(() => {
        dispatch(getArticles());
    }, []);


    return (
        <Suspense fallback={<Loader/>}>
        <div className=" px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {articles.map((article) => (
                <Card key={article._id} item={article} variant="primary" />
            ))}
        </div>
        </Suspense>
    );
};