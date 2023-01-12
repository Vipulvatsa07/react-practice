import axios from 'axios'
import { Link,Navigate, useSearchParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContest } from '../AuthContest/AuthContest'

const setCurrentPage=(value)=>{
   value=Number(value);
   if(typeof value==="string" || value<=0 )
   {
    value=1;
   }
   return value;
}
const User = () => {
  const [data,setData]=useState([])
  const {isAuth,toggle}=useContext(AuthContest)
  const [searchParams,setSearchParams]=useSearchParams();
  const initialPage=setCurrentPage(searchParams.get("page"))
   // const [page,setPage]=useState(1)
   const [page,setPage]=useState(initialPage)

  const getApi=()=>{
    // axios.get("https://reqres.in/api/users").then((res)=>{setData(res.data.data)
//the above will show default page 1 data
axios.get(`https://reqres.in/api/users?page=${page}`).then((res)=>{setData(res.data.data)

  // console.log(res.data.data)
  })
  }
useEffect(()=>{
  getApi();
},[page])

useEffect(()=>{
 setSearchParams({page},"vipul")
 //i can add more queries here like text data
},[page])
// console.log(page)
// if(!isAuth)
// {
//   return <Navigate to="/" />
// }
//as we are making a private route for single user page we do
//not dee this we will wrap it in private route

  return (
    <div>
      <button onClick={toggle}>Logout</button>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",marginTop:"20px"}}>
      
      {
        data.map((user)=>(
          <div>
            <img src={user.avatar} alt="pic" />
         <Link to={`${user.id}`}><h1>More details</h1></Link>
          </div>
        ))
      }
      
    </div>
    <button disabled={page===1} onClick={()=>{setPage(page-1)}}>PREV</button>
    <button>{page}</button>
    <button disabled={page===2} onClick={()=>{setPage(page+1)}}>NEXT</button>
    </div>
  )
}

export default User