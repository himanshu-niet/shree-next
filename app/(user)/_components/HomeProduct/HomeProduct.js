"use client"
import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios';

const HomeProduct = () => {


  useEffect(()=>{

    getApi()

  },[])

  const [data,setData]=useState([]);

  const getApi=async ()=>{

    axios.get("/api/products").then((res)=>{
  
      setData(res.data.data.slice(0,8))
     
    })

  }

  if(!data) return <h1>Loding.....</h1>

 

  return (
    <div className="row isotope-grid">
     
    {data.map((item,idx)=>{
      return(<Product item={item} key={idx}/>)
    })}
      
     
    </div>
  )
}

export default HomeProduct