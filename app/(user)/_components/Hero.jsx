"use client"
import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const Hero = () => {


  return (
   
    <section className=" p-b-54">
    <div className="container">

    <div className="p-b-10">
      <h3 className="ltext-103 cl5 mb-5 ">More Collection</h3>
    </div>

      <div className="p-b-10">
      
      
      
      
      <div className='grid md:grid-cols-3 gap-x-4 gap-y-3 grid-flow-row-dense'>
     
      <div className="block1-hero wrap-pic-w row-span-2 md:col-span-2">
      <img src="images/slide-01.jpg" alt="IMG-BANNER" />
      <a
        href="product.html"
        className="block1-txt-hero ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
      >
        <div className="block1-txt-child1 flex-col-l ">
          <span className="block1-name ltext-102 trans-04 p-b-8"> Tussar Silk Sarees</span>
          <span className="block1-info stext-102 trans-04">
          New Arrival
          </span>
        </div>
       


        

        <div className="block1-txt-child2 p-b-4 trans-05">
          <div className="block1-link stext-101 cl0 trans-09">Shop Now</div>
        </div>
      </a>
    </div>
     
      <div className="block1 wrap-pic-w">
      <img src="images/slide-01.jpg" alt="IMG-BANNER" />
      <a
        href="product.html"
        className="block1-txt-hero ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
      >
        <div className="block1-txt-child1 flex-col-l">
          <span className="block1-name ltext-102 trans-04 p-b-8">Kora Silk Sarees</span>
          <span className="block1-info stext-102 trans-04">
          Best Seller
          </span>
        </div>
        <div className="block1-txt-child2 p-b-4 trans-05">
          <div className="block1-link stext-101 cl0 trans-09">Shop Now</div>
        </div>
      </a>
    </div>

    <div className="block1 wrap-pic-w">
    <img src="images/slide-01.jpg" alt="IMG-BANNER" />
    <a
      href="product.html"
      className="block1-txt-hero ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
    >
      <div className="block1-txt-child1 flex-col-l">
        <span className="block1-name ltext-102 trans-04 p-b-8">Organza Sarees</span>
        <span className="block1-info stext-102 trans-04">
      Trending Product
        </span>
      </div>
      <div className="block1-txt-child2 p-b-4 trans-05">
        <div className="block1-link stext-101 cl0 trans-09">Shop Now</div>
      </div>
    </a>
  </div>




</div>
      </div>
      </div>
      </section>
  )
}

export default Hero