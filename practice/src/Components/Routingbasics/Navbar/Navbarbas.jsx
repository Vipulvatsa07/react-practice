import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const Navbarbas = () => {
    const defaultStyle={
           textDecoration:"none",
           color:"black"
    }
    const activeStyle={
        textDecoration:"none",
        color:"yellow"
    }
  return (
    <div>

    <div style={{display:"flex",margin:"auto",justifyContent:"space-around",backgroundColor:"teal",border:"1px solid black",}}>
    
                <h1><NavLink style={({isActive})=>{return isActive?activeStyle:defaultStyle}} to="/">Home</NavLink></h1>
                <h1> <NavLink style={({isActive})=>{return isActive?activeStyle:defaultStyle}} to="/About">About</NavLink></h1>
                <h1> <NavLink style={({isActive})=>{return isActive?activeStyle:defaultStyle}} to="/Contact">Contact</NavLink></h1>
                <h1> <NavLink style={({isActive})=>{return isActive?activeStyle:defaultStyle}} to="/Users">Users</NavLink></h1>
              </div>
            </div>
  )
}

export default Navbarbas