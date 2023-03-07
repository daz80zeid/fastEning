import { FC, useState } from "react";
import { Link } from "react-router-dom";
import InlineSVG from "react-inlinesvg";

import Logo from "../../assets/icons/logo.svg";
import UserIcon from "../../assets/icons/userIcon.svg";
import { Select } from "../Select/Select";
import {useMediaQuery} from "../../hooks/useMediaQuery";

export const Header: FC = () => {
    const [isUserIconClicked, setIsUserIconClicked] = useState(false);
    const isMobile = useMediaQuery("sm");

    const handleUserIconClick = () => {
        setIsUserIconClicked(!isUserIconClicked);
    };

    const handleCloseMenu = () => {
        setIsUserIconClicked(false);
    };

    return (
        <header
            className={`bg-gray-700 text-white text-center py-4 flex justify-between items-center py-8 px-12 ${
                !isMobile ? "fixed bottom-0 left-0 right-0" : ""
            }`}
        >
            <div className="flex items-center">
                <Link to="/">
                    <InlineSVG src={Logo} className="h-10 w-10 mb-2" />
                </Link>
                <h2 className="ml-2">FastEning</h2>
            </div>
            <div className="relative">
                <div onClick={handleUserIconClick}>
                    <InlineSVG
                        src={UserIcon}
                        className="h-10 w-10 mb-2 cursor-pointer"
                    />
                </div>
                {isUserIconClicked && (
                    <Select
                        isLoggedIn={false}
                        isOpen={isUserIconClicked}
                        handleSelectClose={handleCloseMenu}
                    />
                )}
            </div>
        </header>
    );
};
