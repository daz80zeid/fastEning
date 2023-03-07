import {FC} from "react";

export const Loader: FC = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"/>
        </div>
    );
};