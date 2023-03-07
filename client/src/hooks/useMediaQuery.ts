import { useState, useEffect } from 'react';

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl';

const breakpoints: Record<Breakpoints, string> = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
};

export const useMediaQuery = (breakpoint: Breakpoints): boolean => {
    const mediaQuery = breakpoints[breakpoint];
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const query = window.matchMedia(mediaQuery);
        const listener = () => setMatches(query.matches);
        listener();
        query.addEventListener('change', listener);
        return () => query.removeEventListener('change', listener);
    }, [mediaQuery]);

    return matches;
};
