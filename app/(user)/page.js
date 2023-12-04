import React from 'react'
import Hero from './_components/Hero'
import Categories from './_components/Categories'
import HomeProduct from './_components/HomeProduct/HomeProduct'
import ProductSlider from './_components/HomeProduct/ProductSlider'


const page = () => {
  return (
  <>
  
  <ProductSlider/>

  <section className=" p-t-23">
  <div className="container">
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
    {/* Icon Block */}
    <div>
      <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
        <svg
          className="flex-shrink-0 w-6 h-6 text-blue-600"
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
          <rect width={10} height={14} x={3} y={8} rx={2} />
          <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
          <path d="M8 18h.01" />
        </svg>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 ">
          Responsive
        </h3>
        <p className="mt-1 text-gray-600">
          Responsive, and mobile-first project on the web
        </p>
      </div>
    </div>
    {/* End Icon Block */}
    {/* Icon Block */}
    <div>
      <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl ">
        <svg
          className="flex-shrink-0 w-6 h-6 text-blue-600 "
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
          <path d="M20 7h-9" />
          <path d="M14 17H5" />
          <circle cx={17} cy={17} r={3} />
          <circle cx={7} cy={7} r={3} />
        </svg>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 ">
          Customizable
        </h3>
        <p className="mt-1 text-gray-600 ">
          Components are easily customized and extendable
        </p>
      </div>
    </div>
    {/* End Icon Block */}
    {/* Icon Block */}
    <div>
      <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
        <svg
          className="flex-shrink-0 w-6 h-6 text-blue-600 "
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
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 ">
          Documentation
        </h3>
        <p className="mt-1 text-gray-600 ">
          Every component and plugin is well documented
        </p>
      </div>
    </div>
    {/* End Icon Block */}
    {/* Icon Block */}
    <div>
      <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
        <svg
          className="flex-shrink-0 w-6 h-6 text-blue-600 "
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
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
        </svg>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800">
          24/7 Support
        </h3>
        <p className="mt-1 text-gray-600 ">
          Contact us 24 hours a day, 7 days a week
        </p>
      </div>
    </div>
    {/* End Icon Block */}
  </div>
</div>
 
  </div>
</section>


<Categories/>

<section className="bg0 p-t-23 p-b-140">
  <div className="container">
    <div className="p-b-10">
      <h3 className="ltext-103 cl5 mb-5 ">Product Overview</h3>
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

<Hero/>


<section className=" p-b-54 ">
<div className="mx-auto mt-10 max-w-7xl px-6 sm:mt-10 lg:px-8">
  <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Keep Updated
    </h2>
    <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
      Keep pace with SecureCloud advancements! Join our mailing list for
      selective, noteworthy updates.
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
        Notify me
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
          <stop stopColor="#7775D6" />
          <stop offset={1} stopColor="#7ED321" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  </div>
</div>



  </section>





  </>
  )
}

export default page