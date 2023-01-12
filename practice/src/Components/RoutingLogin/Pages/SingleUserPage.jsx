import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {  useParams,Link } from 'react-router-dom'


const SingleUserPage = () => {
  
    // const params=useParams();
    let {id}=useParams();
    // console.log(params)
    // console.log(id)
    
    const [userDetail,setUserDetail]=useState([])

    
    useEffect(()=>{

      
        axios.get(`https://reqres.in/api/users/${id}`).then((res)=>{
            console.log(res.data.data)
            setUserDetail(res.data.data)
         })


    },[id])
    console.log(userDetail)
  return (
    <div>
        <img src={userDetail.avatar} alt="pic" />
        <h1>{userDetail.first_name} {userDetail.last_name} </h1>
        <h1>{userDetail.email}</h1>
        <h1><Link to="/users">Go Back</Link></h1>

       
    </div>
  )
}

export default SingleUserPage