import { FC, ReactNode } from "react";

type ModalProps = {
    onClose: () => void;
    children: ReactNode;
    pageName?: string | undefined;
    role?: string| undefined;
};

export const Modal: FC<ModalProps> = ({ onClose, children, pageName, role }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center shadow-lg">
            <div className="absolute inset-0 bg-gray-700 opacity-70" onClick={onClose} />
            <div className="relative bg-gray-600 w-full sm:max-w-sm sm:h-auto border-gray-600">
                <div className="absolute top-0 left-0 w-full h-12 border-gray-700 border-b-2 bg-gray-600 flex items-center justify-between">
                    <span className="ml-4">{pageName}</span>
                    <span className="mr-4 text-right">Register as {role}</span>
                </div>
                <div className="p-6">{children}</div>
                <div className="absolute bottom-0 left-0 w-full h-12 border-gray-300 bg-gray-600 shadow-lg" />
            </div>
        </div>
    );
};
