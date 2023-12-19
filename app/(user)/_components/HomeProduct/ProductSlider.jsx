"use client"
import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
;


const ProductSlider = () => {


  return (

    <section className="section-slide">
      <div className="">
        <div className="slick1">

          <Swiper 
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper">
            <SwiperSlide> 
            <div
              className="item-slick1"
              style={{ backgroundImage: "url(images/bg.jpg)" }}
            >
              <div className="container h-full">
                <div className="flex-col-l-m h-full lg:pt-[100px] p-b-30 respon5">
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="fadeInDown"
                    data-delay={0}
                  >
                    <span className="ltext-101 cl1 respon2">
                    Sarees that Transcend Trends
                    </span>
                  </div>
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="fadeInUp"
                    data-delay={800}
                  >
                    <h2 className="ltext-201 cl1 p-t-19 p-b-43 respon1">
                    Timeless Elegance
                    </h2>
                  </div>
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="zotext-4xlomIn"
                    data-delay={1600}
                  >
                    <Link
                    href="product?category=All"
                      className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div
              className="item-slick1"
              style={{ backgroundImage: "url(images/bg1.jpg)" }}
            >
              <div className="container h-full">
                <div className="flex-col-l-m h-full lg:pt-[100px] p-b-30 respon5">
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="fadeInDown"
                    data-delay={0}
                  >
                    <span className="ltext-101 cl1 respon2">
                    A Palette of Rich Cultural Threads
                    </span>
                  </div>
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="fadeInUp"
                    data-delay={800}
                  >
                    <h2 className="ltext-201 cl1 p-t-19 p-b-43 respon1">
                    Vibrant Heritage Hues
                    </h2>
                  </div>
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="zoomIn"
                    data-delay={1600}
                  >
                  <Link
                  href="product?category=GEORGETTE"
                  className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                >
                  Shop Now
                </Link>
                  </div>
                </div>
              </div>
            </div></SwiperSlide>


            <SwiperSlide> <div
              className="item-slick1"
              style={{ backgroundImage: "url(imgHero/bg4.jpg)" }}
            >
              <div className="container h-full">
                <div className="flex-col-l-m h-full lg:pt-[100px] p-b-30 respon5">
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="fadeInDown"
                    data-delay={0}
                  >
                    <span className="ltext-101 cl1 respon2">
                    Artistry in Every Thread
                    </span>
                  </div>
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="fadeInUp"
                    data-delay={800}
                  >
                    <h2 className="ltext-201 cl1 p-t-19 p-b-43 respon1">
                    Luxury Weaves Unveiled
                    </h2>
                  </div>
                  <div
                    className="layer-slick1 animated visible-true"
                    data-appear="zoomIn"
                    data-delay={1600}
                  >
                  <Link
                  href="product?category=GEORGETTE"
                  className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                >
                  Shop Now
                </Link>
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