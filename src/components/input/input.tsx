import React from 'react'
import './input.scss';

interface InputProps {
    text: string,
    labelClass: string,
    name: string,
    type: string,
    inputClass: string,
    error: boolean
}

const Input: React.FC<InputProps> = ({name, text, labelClass, type, inputClass, error}) => {
        return (
            <div className='flex flex-col'>
                <label htmlFor={name} className={labelClass}>{text}</label>
                <input type={type} name={name} id={name} placeholder={text} className={inputClass} style={{borderColor: `${error ? 'rgb(250, 93, 41)' : '#a7a7a7'}`}} required/>
            </div>
        );
}

export default Input;