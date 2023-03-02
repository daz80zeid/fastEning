import {FC} from "react";
import { FaBeer } from 'react-icons/fa';
import {ITerm} from "../../shared/term.interface";
import {Card} from "../../components";


const terms: ITerm[] = [
    {
        id: 1,
        slug: 'term1',
        description: 'term 1 description',
        title: 'term 1',
        text: 'term 1 text',
        icon: FaBeer,
    },
    {
        id: 2,
        slug: 'term2',
        description: 'term 2 description',
        title: 'term 2',
        text: 'term 2 text',
        icon: FaBeer,
    },
    {
        id: 3,
        slug: 'term3',
        description: 'term 3 description',
        title: 'term 3',
        text: 'term 3 text',
        icon: FaBeer,
    },
    {
        id: 4,
        slug: 'term3',
        description: 'term 3 description',
        title: 'term 3',
        text: 'term 3 text',
        icon: FaBeer,
    },
];


export const TermsList: FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {terms.map((term) => (
                <Card key={term.id} item={term} variant="primary" />
            ))}
        </div>
    );
};