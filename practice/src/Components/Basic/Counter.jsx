import React from 'react'
import { useState } from 'react'

 export const Counter = () => {
    const [count,setCount]=useState(0)

 let sty={
    backgroundColor:"skyBlue"
 }    //onClick is a eventhandler
     // useState is a hook to manage state  
    //count is the starting value which we define in usestate
    //setCount is the dispatcher function to set the value of count  setCount(count+1),setCount(count-1)
    const handleAdd=()=>{
        setCount(count+1)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button style={{backgroundColor:"teal"}} onClick={handleAdd}>INC</button>
        <button style={sty} disabled={count===0} onClick={()=>{setCount(count-1)}}>DEC</button>
        <button style={{backgroundColor:"yellow"}} onClick={()=>{setCount(0)}}>RES</button>
    </div>
  )
}

// export default Counter



//In js we have seperate files
//here in react we have jsx