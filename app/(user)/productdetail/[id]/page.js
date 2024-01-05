'use client'

import { getOfferPrice } from '@/utils/fetuers'
import useCartStore from '@/utils/store/cart'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const page = ({ params }) => {


  useEffect(() => {
    getApi()
  }, [])

  const [data, setData] = useState(false)
  const getApi = async () => {
    axios.get(`/api/product?id=${params.id}`).then((res) => {
      console.log(res.data.data)
      setData(res.data.data)

    })
  }

  const [quantity,setQuantity]=useState(1);


  const quantityMinus=()=>{
    if(quantity>1){
    setQuantity(quantity-1);
  }}

  const quantityPlus=(stock)=>{
    if(quantity<stock){
      setQuantity(1+quantity);
    }
  }

  const { addItemToCart } = useCartStore();
  
  const onAddToCart = (product) => {
    product.quantity=quantity || 1;
    product.discountPrice=getOfferPrice(product.price,product.discount) || product.price
    addItemToCart(product);
    alert("Added to cart");
  };


  if (!data) return <h1>Loding.....</h1>



  return (
    <>
      <div className="container lg:mt-20">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <a href="/" className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </a>
          <span className="stext-109 cl8 hov-cl1 trans-04">
            {data.category}
            <i className="fa fa-angle-right m-l-9 m-r-10 text-black" aria-hidden="true" />
          </span>
          <span className="stext-109 cl4"> {data.subCategory}
          </span>
        </div>
      </div>
      {/* Product Detail */}
      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-6  p-b-30">
              <img src={data?.images[0].url} alt="IMG-PRODUCT" />
            </div>
            <div className="col-md-6  p-b-30 px-5 md:px-0 ">
              <div className=" p-t-5 p-lr-0-lg">
                <h4 className="ltext-106 cl2 js-name-detail p-b-5">
                  {data.title}
                </h4>
                <h5 className='stext-106 cl1 my-2'>
                  by The Bunkar Banaras
                </h5>

                <div className='my-3'>
                  {data.discount > 0 ? <span className="mtext-106 cl2 "><del className='mr-2 text-gray-500'>Rs.{data.price}</del>Rs.{getOfferPrice(data.price, data.discount)}</span>
                    : <span className="mtext-106 cl2 ">Rs.{getOfferPrice(data.price, data.discount)}</span>}

                </div>
                <div>
                  <span className="mtext-106 cl2">Availability: </span>

                  {data.stock > 0 ? <span className='stext-102 text-green-500'>In stock, ready to be shipped</span> :
                    <span className='stext-102 text-red-500'>Out of stock, currently unavailable for shipment</span>}


                </div>
                <div>
                <span className="mtext-106 cl2">Color: </span>

                <span className='stext-102 text-black'>{data.color}</span>


              </div>

                {/*  */}
                <div className="p-t-33">
                  <div>
                    <span className="mtext-102 cl2">Quantity:</span>
                  </div>

                  <div className='flex-w  p-b-10'>
                    <div className="wrap-num-product flex-w m-r-20 ">
                      <div onClick={()=>quantityMinus()} className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                        <i className="fs-16 zmdi zmdi-minus" />
                      </div>

                      <input
                        className="mtext-104 cl3 txt-center num-product"
                        type="number"
                        name="num-product"
                        onChange={()=>true}
                        min="1"
                        max={data.stock}
                        value={quantity}
                      />

                      <div onClick={()=>quantityPlus(data.stock)} className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                        <i className="fs-16 zmdi zmdi-plus" />
                      </div>
                    </div>
                    <div>

                    </div>
                  </div>
                  <div className='grid grid-cols-2 mt-10'>
                    <div>  <button
                      type="button"
                      onClick={()=>onAddToCart(data)}
                      className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#791106] text-white hover:bg-[#95270A] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 "
                    >
                      Add to cart
                      <svg
                        className="flex-shrink-0 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 11 4-7" />
                        <path d="m19 11-4-7" />
                        <path d="M2 11h20" />
                        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                        <path d="m9 11 1 9" />
                        <path d="M4.5 15.5h15" />
                        <path d="m15 11-1 9" />
                      </svg>
                    </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900  disabled:pointer-events-none"
                      >
                        Buy Now
                        <svg
                          className="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className='mt-5'>


                    <ul role="list" className="space-y-2 sm:space-y-4">
                      <li className="flex space-x-3">
                        {/* Solid Check */}
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {/* End Solid Check */}
                        <span className="text-sm sm:text-base text-gray-500">
                          <span className="font-bold">On Time Delivery</span>
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        {/* Solid Check */}
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {/* End Solid Check */}
                        <span className="text-sm sm:text-base text-gray-500">
                          <span className="font-bold">100% Safe and Secure</span>
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        {/* Solid Check */}
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {/* End Solid Check */}
                        <span className="text-sm sm:text-base text-gray-500">
                          <span className="font-bold">Returns , Replacements and Refunds</span>
                        </span>
                      </li>
                    </ul>




                  </div>
                </div>
                {/*  */}

              </div>
            </div>
          </div>
          <div className="bor10 m-t-50 p-t-43 p-b-40">
            {/* Tab01 */}
            <div className="tab01">
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item p-b-10">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#description"
                    role="tab"
                  >
                    Description
                  </a>
                </li>
               
              </ul>
              {/* Tab panes */}
              <div className="tab-content p-t-43">
                {/* - */}
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                >
                  <div className="how-pos2 p-lr-15-md">
                    <p className="stext-102 cl6">
                      {data.desc}
                    </p>
                  </div>
                </div>
                {/* - */}
              
              </div>
            </div>
          </div>
        </div>
        <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
          <span className="stext-107 cl6 p-lr-25">Categorie: {data.category}</span>
          <span className="stext-107 cl6 p-lr-25">Sub-Categorie: {data.subCategory}</span>
        </div>
      </section>

    </>

  )
}

export default page