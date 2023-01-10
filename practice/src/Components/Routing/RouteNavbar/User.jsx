import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const User = () => {
  const [data,setData]=useState([])

  const getApi=()=>{
    axios.get("https://reqres.in/api/users?page=2").then((res)=>{setData(res.data.data)
  console.log(res.data.data)
  })
  }
useEffect(()=>{
  getApi();
},[])
  return (
    <div>
      {
        data.map((user)=>(
          <div>
         <Link to={`${user.id}`}><h1> {user.first_name}</h1></Link>
          </div>
        ))
      }
    </div>
  )
}

export default User