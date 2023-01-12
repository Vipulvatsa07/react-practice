import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import PageNotFound from '../Pages/PageNotFound'
import SingleUserPage from '../Pages/SingleUserPage'
import User from '../Pages/User'
import PrivateRoute from '../Navbar/PrivateRoute'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/> }></Route>
            <Route path="/about" element={<h1>About</h1>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Users" element={<PrivateRoute><User/></PrivateRoute>}></Route>
            <Route path="/Users/:id" element={<PrivateRoute><SingleUserPage/></PrivateRoute>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
            
          </Routes>
    </div>
  )
}

export default AllRoutes