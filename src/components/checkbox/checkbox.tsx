import React from 'react'
import './checkbox.scss'

interface CheckboxProps {
    text: string,
    labelClass: string,
    name: string,
    type: string,
    inputClass: string,
    required: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({name, text, labelClass, type, required}) => {
        return (
            <div className="flex items-center mt-5">
                {
                   required ?  <input type={type} id={name} name={name} value={name} required/> : <input type={type} id={name} name={name} value={name} />
                }
                <label htmlFor={name} className={labelClass}>{text}</label>
            </div>
        );
}

export default Checkbox;