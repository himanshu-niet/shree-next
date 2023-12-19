import React from 'react'
import ProductOperation from '../_components/Products/ProductOperation'
import Link from 'next/link'

const page = () => {


  const data=[
    
  
    {
      src:"images/item5.jpg",
      price:12000
    },
    {
      src:"images/item6.jpg",
      price:2000
    },
    {
      src:"images/item7.jpg",
      price:3650
    },
    {
      src:"images/item8.jpg",
      price:7850
    },
    {
      src:"images/cat.jpg",
      price:5000
    },
    {
      src:"images/cat1.jpg",
      price:4500
    },
    {
      src:"images/cat3.jpg",
      price:5550
    },
    {
      src:"images/item4.jpg",
      price:6400
    },
  
    ]
  

  return (
    <div className="bg0  lg:mt-24 p-b-140">
    <div className="container">
    

    <ProductOperation/>
    

      <div className="row isotope-grid">
        
    
      {data.map((item,idx)=>{
        return(  <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
        {/* Block2 */}
        <div className="block2">
          <div className="block2-pic hov-img0">
            <img src={item.src} alt="IMG-PRODUCT" />
            <Link
            href="shopingcart"
            className="block2-btn flex-c-m stext-103  size-102 btn-m-lm p-lr-15 trans-04 js-show-modal1"
          >
            Add To Cart
          </Link>
          </div>
          <div className="block2-txt flex-w flex-t p-t-14">
            <div className="block2-txt-child1 flex-col-l ">
              <a
                href="product-detail.html"
                className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
              >
                Esprit Ruffle Shirt
              </a>
              <span className="stext-105 cl3">Rs. {item.price}</span>
            </div>
            <div className="block2-txt-child2 flex-r p-t-3">
              
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