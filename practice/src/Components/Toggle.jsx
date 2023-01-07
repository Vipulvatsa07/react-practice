import React from 'react'
import { useState } from 'react'

const Toggle = () => {
  const [toggle,setToggle]=useState("A")

  const handleChange=()=>{
     if(toggle==="A")
     {
        setToggle("B")
     }
     else if(toggle==="B")
     {
        setToggle("C")
     }
     else{
        setToggle("A")
     }
  }

  return (
    <div>
        <h1>{toggle}</h1>
        <button style={{backgroundColor:"gold"}} onClick={handleChange}>Toggle</button>
    </div>
  )
}

export default Toggle


// A,B,C