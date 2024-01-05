"use client"
import React, { useEffect, useState } from 'react'
import ProductOperation from '../_components/Products/ProductOperation'
import Link from 'next/link'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'

const page = () => {
  const searchParams = useSearchParams()
  

  useEffect(()=>{
    const search = searchParams.get('search')
    const category = searchParams.get('category')
    const subCategory = searchParams.get('subCategory')
    const color = searchParams.get('color')
    const sort = searchParams.get('sort')
    const price = searchParams.get('price')

    let url=`/api/products`;

    url=search?url+`?search=${search}`:url;
    url=category?url+`?category=${category}`:url;
    url=subCategory?url+`?subCategory=${subCategory}`:url;
    url=color?url+`?color=${color}`:url;
    url=sort?url+`?sort=${sort}`:url;
    url=price?url+`?price=${price}`:url;

    getApi(url)

  },[searchParams])

  const [data,setData]=useState(false);

  const getApi=async (url)=>{
    console.log(url)
    axios.get(url).then((res)=>{
      setData(res.data.data)
    })
  }

  if(!data) return <h1>Loding.....</h1>


  return (
    <div className="bg0  lg:mt-24 p-b-140">
    <div className="container">
    

    <ProductOperation/>
    

      <div className="row isotope-grid">
        
      {data.length<1?<h4>Product Not Found</h4>:""}
    
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