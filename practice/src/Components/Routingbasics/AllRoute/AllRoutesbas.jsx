import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from '../Pages/About'
const AllRoutesbas = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<h1>Home</h1> }></Route>
            <Route path="/User" element={<h1>user</h1>}></Route>
            <Route path="/Contact" element={<h1>Contact</h1>}></Route>
            <Route path="/About" element={<About/>}></Route>
          </Routes>
    </div>
  )
}

export default AllRoutesbas