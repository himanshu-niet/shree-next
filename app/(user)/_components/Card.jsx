"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Pagination } from 'swiper/modules';

export default function Card() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={ 2000}
        speed= {800}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          499: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
         <div className="relative flex flex-col my-6  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="imgCard/item1.jpeg"
              alt="card-image"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Discover Our Heritage
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Unveil the legacy of Banarasi sarees – centuries of tradition woven into every thread. Explore our heritage collection, a testament to timeless craftsmanship and cultural richness.
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
           <b>Clipart suggestion:</b> Traditional loom or an artistic depiction of a weaving pattern.
           </p>
            </p>
           
           
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="relative flex flex-col my-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
         <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
           <img
             src="imgCard/item3.jpeg"
             alt="card-image"
           />
         </div>
         <div className="p-6">
           <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
           Elegance Personified
           </h5>
           <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
           Indulge in the allure of Banarasi grace. Our curated collection showcases sarees that exude sophistication and charm, perfect for every occasion and celebration.
           <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          <b>Clipart suggestion:</b>A draped saree or an elegant silhouette.
          </p>
           </p>
         </div>
       </div>
       </SwiperSlide>

       <SwiperSlide> 
       <div className="relative flex flex-col my-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src="imgCard/item2.jpeg"
            alt="card-image"
          />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Craftsmanship Redefined
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Experience the finesse of handcrafted elegance. Our sarees are meticulously woven by skilled artisans, embodying precision and artistry that transcends generations.

            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
           <b>Clipart suggestion:</b> Hands weaving or a detailed illustration of a weaving process.
           </p>
            </p>
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide> 
      <div className="relative flex flex-col my-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
       <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
         <img
           src="imgCard/item4.jpeg"
           alt="card-image"
         />
       </div>
       <div className="p-6">
         <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
         Modern Classics
         </h5>
         <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
         Witness tradition meet contemporary allure. Explore our modern classics, where heritage weaves merge seamlessly with fresh designs, catering to the modern-day taste. </p>
     
       </div>
     </div>
     </SwiperSlide>

      </Swiper>
    </>
  );
}
