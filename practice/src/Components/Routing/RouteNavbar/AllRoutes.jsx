import React from 'react'
import { Route,Routes } from 'react-router-dom'
import User from './User'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<h1>Home</h1> }></Route>
            <Route path="/about" element={<h1>About</h1>}></Route>
            <Route path="/Contact" element={<h1>Contact</h1>}></Route>
            <Route path="/Users" element={<User/>}></Route>
          </Routes>
    </div>
  )
}

export default AllRoutes