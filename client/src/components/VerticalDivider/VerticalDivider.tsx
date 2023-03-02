import {FC} from "react";

type VerticalDividerLineProps = {
    thickness?: number;
    color?: string;
};

export const VerticalDivider: FC<VerticalDividerLineProps> = ({thickness = 3, color = 'white',}) => {
    return (
        <div className={`border-l-${thickness} border-solid border-${color} h-full`}/>
    );
};
