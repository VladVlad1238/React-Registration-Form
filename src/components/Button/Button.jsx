import React from "react";
import s from "../Button/Button.module.css"

function Button({ text, type, onClick }) {
  return (
    <button 
      className={s.button} 
      type={type} 
      onClick={onClick}>
        {text}
    </button>
  )
}

export default Button