import{ AuthContest } from "../AuthContest/AuthContest"
import React from "react"
import { Navigate } from "react-router-dom"
const PrivateRoute=({children})=>{
const {isAuth}=React.useContext(AuthContest)

if(!isAuth)
{
    return <Navigate to="/"/>
}

    return children
}
export default PrivateRoute