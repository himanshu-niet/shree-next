import Link from 'next/link'
import React from 'react'

const Product = ({item}) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
    {/* Block2 */}
    <div className="block2">
      <div className="block2-pic hov-img0">
        <img src={item.images[0]?.url} alt="IMG-PRODUCT" />
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
            {item.title}
          </a>
          <span className="stext-105 cl3">Rs.{item.price}</span>
        </div>
        <div className="block2-txt-child2 flex-r p-t-3">
          <a
            href="#"
            className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
          >
            <img
              className="icon-heart1 dis-block trans-04"
              src="images/icons/icon-heart-01.png"
              alt="ICON"
            />
           
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Product