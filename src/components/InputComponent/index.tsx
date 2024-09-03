import React, { FC } from 'react';
import classes from './Input.module.scss'

interface InputProps {
    id: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: FC<InputProps> = ({ id, type, value, placeholder, onChange }): JSX.Element => {
    return (
        <label className={classes.label} htmlFor={id}>
            <input
                className={classes.input}
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </label>
    )
}

export default InputComponent
