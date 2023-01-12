import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContest } from '../AuthContest/AuthContest'

const Home = () => {
    const {toggle,isAuth}=useContext(AuthContest)
    if(isAuth)
    {
        return <Navigate to="/users" />
    }
  return (
    <div>
        <button onClick={toggle}>Login</button>
    </div>
  )
}

export default Home