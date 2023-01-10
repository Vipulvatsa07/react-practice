import React from 'react'

const Button = (props) => {
    const{text,handleClick}=props
  return (
    <div>
        <button onClick={handleClick}>{text}</button>
    </div>
  )
}

export default Button