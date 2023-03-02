import {ChangeEvent, FC, useState} from "react";
import {Button, Input, TextArea} from "../../components";

export const TermForm: FC = () => {
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        setDescription(newValue)
    };
    const handleSubmit = () => {
        console.log('1')
    }
    return (
        <div className="flex-grow flex justify-center items-center bg-gray-700">
        <form className="px-8 py-8 bg-gray-700" onSubmit={handleSubmit}>
            <Input type='text' variant='username' label='Term name' value={name} onChange={setName}/>
            <TextArea label='description' value={description} onChange={handleChange}/>
            <Button >
                Create Term
            </Button>
        </form>
        </div>
    );
};
