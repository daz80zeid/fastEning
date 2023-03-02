import {useEffect, useState} from "react";


export const useVisible = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 1100);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    return {isVisible}
}