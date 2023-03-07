import { FC } from "react";
import { Link } from "react-router-dom";

type SelectProps = {
    isOpen: boolean;
    isLoggedIn: boolean
    handleSelectClose: () => void;
};

export const Select: FC<SelectProps> = ({ isOpen, handleSelectClose, isLoggedIn= false }) => {
    return (
        <div
            className={`${
                isOpen ? "" : "hidden"
            } absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50`}
        >
            {isLoggedIn ? (
                <>
            <Link
                to="/account"
                onClick={handleSelectClose}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
                My Account
            </Link>
            <Link
                to="/articles"
                onClick={handleSelectClose}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
                Articles
            </Link>
            <Link
                to="/terms"
                onClick={handleSelectClose}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
                Terms
            </Link>
            <Link
                to="/"
                onClick={handleSelectClose}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
                Logout
            </Link>
                </>) : (
                <Link
                to="/login"
                onClick={handleSelectClose}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                >
                Login or Register
                </Link>
                )}
        </div>
    );
};
