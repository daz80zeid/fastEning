import { FC } from 'react';
import classNames from 'classnames';
import {IArticle} from "../../shared/article.interface";
import {ITerm} from "../../shared/term.interface";

type CardProps = {
    item: ITerm | IArticle;
    variant?: 'primary' | 'secondary';
};

export const Card: FC<CardProps> = ({
                                        item,
                                        variant = 'primary',
                                    }) => {
    const cardClasses = classNames(
        'bg-white rounded-lg overflow-hidden shadow-lg',
        {
            'border-l-4 border-white-600': variant === 'primary',
            'border-l-4 border-gray-500': variant === 'secondary',
        }
    );

    return (
        <div className={cardClasses}>
            {/*<div className="h-48 w-full flex items-center justify-center">*/}
                {/*<item.icon className="text-4xl text-blue-500" />*/}
            {/*</div>*/}
            <div className="p-6">
                <h2 className="font-bold text-2xl mb-2">{item.name}</h2>
                <p className="text-gray-700 text-base">{item.text? item.text : item.description}</p>
            </div>
        </div>
    );
};



