import InlineSVG from 'react-inlinesvg';
import Logo from '../../assets/icons/logo.svg';
import {useVisible} from "../../hooks/useVisible";

export const Home = () => {
    const { isVisible } = useVisible()
    const text = `What the algorithm can do\n\n should do the algorithm.\n\nEverything the algorithm can't do\n\n A person must do.`;

    return (
            <div className={`w-full flex flex-row divide-x-2 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
                <div className="flex-1 h-full p-4 flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center">
                        <InlineSVG src={Logo} className="h-16 w-16 mb-2" />
                        <h2 className="text-2xl font-bold text-white">FastEning</h2>
                    </div>
                </div>
                <div className="flex-1 h-full p-4 flex flex-col justify-center items-center">
                    <div className="text-center">
                        {text.split('\n\n').map((sentence, index) => (
                            <p className="text-white" key={index}>
                                {sentence}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
    );
};
