import React from 'react'
import Hero from './_components/Hero'
import Categories from './_components/Categories'
import HomeProduct from './_components/HomeProduct/HomeProduct'
import ProductSlider from './_components/HomeProduct/ProductSlider'

import Card  from './_components/Card'

import React, { lazy } from 'react';


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
      <a
        href="#"
        className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
      >
        Load More
      </a>
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
  <div         className="block-lm-m w-full flex flex-col text-start p-3 md:p-5 rounded-xl ">

    <svg
      className="flex-shrink-0 hidden sm:block h-7 w-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white"
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
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
    <span className="mt-5">
      <span className="hs-tab-active:text-blue-600 block font-semibold cl1">
      Expedited Shipping
      </span>
      <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
      Fast-track your fashion game with Expedited Shipping, Style on your doorstep, pronto.
      </span>
    </span>
  </div>
  <div
    className="block-lm-m w-full flex flex-col text-start p-3 md:p-5 rounded-xl ">
    <svg
      className="flex-shrink-0 hidden sm:block h-7 w-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white"
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
    <span className="mt-5">
      <span className="hs-tab-active:text-blue-600 block font-semibold cl1">
      Gift Pack
      </span>
      <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
      Make gifting effortless with our elegant gift packs; we offer discreet gift delivery for that extra touch of thoughtfulness.
      </span>
    </span>
  </div>
  <div        className="block-lm-m w-full flex flex-col text-start p-3 md:p-5 rounded-xl ">

    <svg
      className="flex-shrink-0 hidden sm:block h-7 w-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white"
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
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
    <span className="mt-5">
      <span className="hs-tab-active:text-blue-600 block font-semibold  cl1">
      Shop Securely
      </span>
      <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
      Rest assured, our secure payment system ensures that your transactions are protected every time you shop with us.
      </span>
    </span>
  </div>
  <div        className="block-lm-m w-full flex flex-col text-start p-3 md:p-5 rounded-xl ">

    <svg
      className="flex-shrink-0 hidden sm:block h-7 w-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white"
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
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
    <span className="mt-5">
    <span className="hs-tab-active:text-blue-600 block font-semibold  cl1">

      Round-the-Clock Support
      </span>
      <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
      We're Here Around the Clock to Assist with All Your Style Emergencies and Fulfill Every Shopping Need You Have.
      </span>
    </span>
  </div>
</nav>

</div>


<Hero/>





 
 



{/**

<section className=" p-b-54 ">
<div className="mx-auto mt-10 max-w-7xl px-6 sm:mt-10 lg:px-8">
  <div className="relative isolate overflow-hidden bg3 px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Keep Updated
    </h2>
    <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
    Get Exclusive Saree Styles & Offers Delivered to Your Inbox!
    </p>
    <form className="mx-auto mt-10 flex max-w-md gap-x-4">
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required=""
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
      Subscribe
      </button>
    </form>
    <svg
      viewBox="0 0 1024 1024"
      className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
      aria-hidden="true"
    >
      <circle
        cx={512}
        cy={512}
        r={512}
        fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
        fillOpacity="0.7"
      ></circle>
      <defs>
        <radialGradient
          id="759c1415-0410-454c-8f7c-9a820de03641"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(512 512) rotate(90) scale(512)"
        >
          <stop stopColor="#95270A" />
          <stop offset={1} stopColor="#95270A" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  </div>
</div>



  </section>

 */}



  </>
  )
}

export default page