import React from "react";
import s from "../Link/Link.module.css"

function Link({ text, value, href }) {
  return (
    <div className={s.div}>
      <p className={s.text}>{text}</p>
      <a className={s.link} href={href}>{value}</a>
    </div>
  )
}

export default Link