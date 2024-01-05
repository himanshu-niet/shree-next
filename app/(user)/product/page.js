"use client"
import React, { useEffect, useState } from 'react'
import ProductOperation from '../_components/Products/ProductOperation'
import Link from 'next/link'
import axios from 'axios'

const page = () => {


  useEffect(()=>{

    getApi()

  },[])

  const [data,setData]=useState([]);
  const getApi=async ()=>{
    axios.get("/api/products").then((res)=>{
      setData(res.data.data)
    })
  }

  if(!data) return <h1>Loding.....</h1>

 
  

  return (
    <div className="bg0  lg:mt-24 p-b-140">
    <div className="container">
    

    <ProductOperation/>
    

      <div className="row isotope-grid">
        
    
      {data.map((item,idx)=>{
        return( 
           <div key={idx} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
        {/* Block2 */}
        <div className="block2">
          <div className="block2-pic hov-img0">
            <img src={item.images[0]?.url} alt="IMG-PRODUCT" />
            <Link
            href={`productdetail/${item.id}`}
            className="block2-btn flex-c-m stext-103  size-102 btn-m-lm p-lr-15 trans-04 js-show-modal1"
          >
            Buy Now
          </Link>
          </div>
          <div className="block2-txt flex-w flex-t p-t-14">
            <div className="block2-txt-child1 flex-col-l ">
              <a
                href="product-detail.html"
                className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
              >
                {item.title}
              </a>
              <span className="stext-105 cl3">Rs. {item.price}</span>
            </div>
           
          </div>
        </div>
      </div>)
      })}

      </div>
      {/* Load more */}
      <div className="flex-c-m flex-w w-full p-t-45">
        <Link
          href="#"
          className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
        >
          Load More
        </Link>
      </div>
    </div>
  </div>
  
  )
}

export default page