import Settings from "../assets/icons/settings.svg";
import User from "../assets/icons/userIcon.svg";
import Article from "../assets/icons/pencil.svg";

export const navItems = [
    {
        to: "/personal-information",
        icon: User,
        label: "Personal Information",
    },
    {
        to: "/articles",
        icon: Article,
        label: "Articles",
    },
    {
        to: "/settings",
        icon: Settings,
        label: "Settings",
    },
];