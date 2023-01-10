import React, { useEffect, useState } from 'react'
import ShowItem from './ShowItem'

const Apifetc = () => {
    const[data,setData]=useState([])

    const Api= async()=>{
        let r=await fetch("https://fakestoreapi.com/products")
        let data=await r.json();
        setData(data)
        console.log(data)  
    }
    useEffect(()=>{
        Api()
    })
  return (
    <div>
       { data.map((el)=> {
            return (
                <div>
                    <ShowItem title={el.title} image={el.image} />
                </div>
            )
        })
    }
    </div>
  )
}

export default Apifetc