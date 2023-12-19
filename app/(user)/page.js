import React from 'react'
import Hero from './_components/Hero'
import Categories from './_components/Categories'
import HomeProduct from './_components/HomeProduct/HomeProduct'
import ProductSlider from './_components/HomeProduct/ProductSlider'

import Card  from './_components/Card'
import Link from 'next/link'


const page = () => {


  return (
  <>
  
  <ProductSlider/>

  <section className=" p-t-50">
  <div className="container my-5">
  <Card/>
 
  </div>
</section>


<Categories/>

<section className="bg0 p-t-23 p-b-140">
  <div className="container">
    <div className="p-b-10">
      <h3 className="ltext-103 cl5 mb-5 ">New To The Shop</h3>
    </div>
   
    <HomeProduct/>

    {/* Load more */}
    <div className="flex-c-m flex-w w-full p-t-45">
      <Link
        href="product"
        className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
      >
        Load More
      </Link>
    </div>
  </div>
</section>


<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<div className='container'>
<div className="p-b-10">
<h3 className="ltext-103 cl5 mb-5 ">Salient Aspects</h3>
</div>
</div>
 
<nav
  className="max-w-6xl mx-auto grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4"
 
>
  <div         className="block-lm-m w-full flex flex-col text-start p-3 md:p-5 rounded-xl mt-2 ">

    <img
      className="flex-shrink-0  sm:block h-24 w-24 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white"
      src='icons/fast.png'
    />
    <span className="mt-2">
      <span className="hs-tab-active:text-blue-600 block font-semibold cl1">
      Expedited Shipping
      </span>
      <span className=" lg:block mt-2 text-gray-800 dark:text-gray-200">
      Fast-track your fashion game with Expedited Shipping, Style on your doorstep, pronto.
      </span>
    </span>
  </div>
  <div
    className="block-lm-m w-full flex flex-col text-start p-3 md:p-5 rounded-xl mt-2 ">
    <img
      className="flex-shrink-0  sm:block h-24 w-24 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white"
      src='icons/christmas.png'
    />
    <span className="mt-2">
      <span className="hs-tab-active:text-blue-600 block font-semibold cl1">
      Gift Pack
      </span>
      <span className=" lg:block mt-2 text-gray-800 dark:text-gray-200">
      Make gifting effortless with our elegant gift packs; we offer discreet gift delivery for that extra touch of thoughtfulness.
      </span>
    </span>
  </div>
  <div        className="block-lm-m w-full flex flex-col text-start p-3 md:p-5 rounded-xl mt-2 ">

  <img
  className="flex-shrink-0  sm:block h-24 w-24 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white"
  src='icons/security.png'
/>
<span className="mt-2">
      <span className="hs-tab-active:text-blue-600 block font-semibold  cl1">
      Shop Securely
      </span>
      <span className=" lg:block mt-2 text-gray-800 dark:text-gray-200">
      Rest assured, our secure payment system ensures that your transactions are protected every time you shop with us.
      </span>
    </span>
  </div>
  <div        className="block-lm-m w-full flex flex-col text-start p-3 md:p-5 rounded-xl mt-2 ">

  <img
  className="flex-shrink-0  sm:block h-24 w-24 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white"
  src='icons/clock.png'
/>
<span className="mt-2">
    <span className="hs-tab-active:text-blue-600 block font-semibold  cl1">

      Round-the-Clock Support
      </span>
      <span className=" lg:block mt-2 text-gray-800 dark:text-gray-200">
      We're Here Around the Clock to Assist with All Your Style Emergencies and Fulfill Every Shopping Need You Have.
      </span>
    </span>
  </div>
</nav>

</div>


<Hero/>


  </>
  )
}

export default page