import React, { useState } from 'react'
import { IState as Props } from "../App"


interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: "",
    });
    const handleChange =
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            });
        }
    const handleClick = (): void => {
        if (!input.name || !input.age || !input.img) { return }
        setPeople([...people,
        {
            name: input.name,
            age: parseInt(input.age),
            img: input.age,
            note: input.note
        }])
        setInput({
            name: "",
            age: "",
            note: "",
            img: "",
        });
    }

    return (
        <div className='AddToList'>
            <input type="text" placeholder='name' className='AddToList-input' value={input.name} name="name" onChange={handleChange} />
            <input type="number" placeholder='age' className='AddToList-input' value={input.age} name="age" onChange={handleChange} />
            <input type="text" placeholder='image url' className='AddToList-input' value={input.img} name="img" onChange={handleChange} />
            <textarea placeholder='note' className='AddToList-textarea' value={input.note} name="note" onChange={handleChange} />
            <button className='AddToList-btn'
                type='submit'
                onClick={handleClick}
            >Submit</button>
        </div>
    )
}

export default AddToList