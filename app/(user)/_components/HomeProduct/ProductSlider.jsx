"use client"
import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const ProductSlider = () => {


  return (

    <section className="section-slide">
      <div className="">
        <div className="slick1">

          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide> 
            <div
              className="item-slick1"
              style={{ backgroundImage: "url(images/bg.jpg)" }}
            >
              <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="fadeInDown"
                    data-delay={0}
                  >
                    <span className="ltext-101 cl2 respon2">
                    NEW ARRIVAL
                    </span>
                  </div>
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="fadeInUp"
                    data-delay={800}
                  >
                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                     ALL PRODUCT
                    </h2>
                  </div>
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="zotext-4xlomIn"
                    data-delay={1600}
                  >
                    <a
                      href="product.html"
                      className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div
              className="item-slick1"
              style={{ backgroundImage: "url(images/bg1.jpg)" }}
            >
              <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="fadeInDown"
                    data-delay={0}
                  >
                    <span className="ltext-101 cl2 respon2">
                      Best Seller
                    </span>
                  </div>
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="fadeInUp"
                    data-delay={800}
                  >
                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                    GEORGETTE SAREES
                    </h2>
                  </div>
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="zoomIn"
                    data-delay={1600}
                  >
                    <a
                      href="product.html"
                      className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div></SwiperSlide>
           

          </Swiper>


        </div>
      </div>
    </section>
  )
}

export default ProductSlider