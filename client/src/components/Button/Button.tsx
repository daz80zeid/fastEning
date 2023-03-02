import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { IconType } from 'react-icons';

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
    variant?: 'primary' | 'secondary';
    loading?: boolean;
    disabled?: boolean;
    icon?: IconType;
    hasIcon?: boolean;
};

export const Button: FC<ButtonProps> = ({
                                     children,
                                     onClick,
                                     type,
                                     variant = 'primary',
                                     loading = false,
                                     disabled = false,
                                     icon: Icon,
                                     hasIcon = variant === 'secondary' && !!Icon,
                                 }: ButtonProps) => {
    const buttonClasses = classNames(
        'px-4 py-2 rounded-md font-semibold transition-colors duration-300 text-underline',
        {
            'bg-blue-500 hover:bg-blue-600 text-white border-blue-500': variant === 'primary',
            'bg-transparent hover:bg-blue-500 text-blue-700 border border-blue-500': variant === 'secondary',
            'bg-blue-500 hover:bg-blue-600 text-white border-blue-500 flex items-center justify-center': hasIcon,
            'cursor-not-allowed opacity-50': disabled || loading,
        }
    );

    const iconClasses = classNames('inline-block align-middle mr-2', {
        'animate-spin': loading,
    });

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled || loading}
            aria-label={hasIcon ? 'Button with icon' : 'Button without icon'}
        >
            {Icon && <Icon className={iconClasses} />}
            {children}
        </button>
    );
};
