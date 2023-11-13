import React from "react";
import s from './Input.module.css'

function Input({type, name, value, placeholder, required, pattern, text, onChange, isChecked}) {
  const className = type === 'checkbox' ? s.checkbox : s.input
  return (
    <div className={s.div}>
      <input 
        className={className} 
        value={value}
        type={type} 
        name={name} 
        placeholder={placeholder} 
        pattern={pattern} 
        required={true}
        onChange={onChange}
        checked={isChecked}
        />
        {text}
    </div>
  )
}

export default Input