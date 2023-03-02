import {FC} from "react";

export const Footer: FC = () => {
    return (
        <footer className="bg-gray-700 text-white text-center py-4">
            <p>&copy; {new Date().getFullYear()} FastEning</p>
        </footer>
    );
};