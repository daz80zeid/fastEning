import {FC, ReactNode} from 'react';
import {Header, Footer} from "../index";
import Layout from "../Layout/Layout";

type ContainerProps = {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-300">
            <Header/>
            <Layout>
            {children}
            </Layout>
            <Footer/>
        </div>
    );
};