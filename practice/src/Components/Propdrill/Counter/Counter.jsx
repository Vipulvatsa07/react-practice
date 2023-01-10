import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {
    const[count,setCount]=useState(0);
    const handleAdd=()=>{
        setCount(count+1)
    }
    const handleSub=()=>{
        setCount(count-1)
    }
    const handleRes=()=>{
        setCount(0)
    }
  return (
    <div>
        <h1>Counter:{count}</h1>
        <Button text="INC" handleClick={handleAdd}/>
        <Button text="DEC" handleClick={handleSub}/>
        <Button text="RES" handleClick={handleRes}/>
    </div>
    
  )
}

export default Counter