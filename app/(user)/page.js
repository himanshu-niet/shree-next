import React from 'react'
import Hero from './_components/Hero'
import Categories from './_components/Categories'
import HomeProduct from './_components/HomeProduct/HomeProduct'
import ProductSlider from './_components/HomeProduct/ProductSlider'


const page = () => {
  return (
  <>
  
  <ProductSlider/>
  
  <Hero/>

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





  </>
  )
}

export default page