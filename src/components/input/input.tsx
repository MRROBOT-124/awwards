import React from 'react'
import './input.scss';

interface InputProps {
    text: string,
    labelClass: string,
    name: string,
    type: string,
    inputClass: string
}

const Input: React.FC<InputProps> = ({name, text, labelClass, type, inputClass}) => {
        return (
            <div className='flex flex-col'>
                <label htmlFor={name} className={labelClass}>{text}</label>
                <input type={type} name={name} id={name} placeholder={text} className={inputClass} required/>
            </div>
        );
}

export default Input;