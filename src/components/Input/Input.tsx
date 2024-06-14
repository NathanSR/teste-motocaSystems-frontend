import React from 'react';
import { InputProps } from './Input.types';
import styles from './Input.module.css'
import { useFormContext } from 'react-hook-form';

const Input: React.FC<InputProps> = ({ label, type, name, options, prefix, ...props }) => {
    const { register } = useFormContext();

    return (
        <div className={styles.Input}>
            <label>{label}</label>
            <main>
                {prefix && <div className={styles.prefix}>{prefix}</div>}
                {type === 'select' ? (
                    <select {...register(name)} {...props} >
                        {options?.map(option => <option key={option} value={option} children={option} />)}
                    </select>
                ) : (
                    <input type={type} {...register(name, { valueAsNumber: type === "number" })} {...props} />
                )}
            </main>
        </div>
    );
};

export default Input;
