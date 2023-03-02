import {FC, ReactNode} from "react";

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <main className="flex-grow flex justify-center items-center bg-gray-700">
            {children}
        </main>
    );
};
export default Layout;