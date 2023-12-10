import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <div className="sec-banner bg0 p-t-80 p-b-50">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            {/* Block1 */}
            <div className="block1 wrap-pic-w">
              <img src="images/cat.jpg" alt="IMG-BANNER" />
              <Link
                href="product?category=Georgette"
                className="block1-txt ab-t-l s-full flex flex-col justify-end p-lr-38 p-tb-34 trans-03 respon3"
              >
                <div className="block1-txt-child1 flex-col-l ">
                <div className="block1-txt p-b-4 trans-05">
                <div className="block1-name ltext-102  trans-04">Georgette Sarees</div>
                <div className="block1-info stext-102  trans-04 mt-2 mb-3"> Latest Stock</div>

              </div>
             
                </div>
                <div className=" p-b-4 trans-05 ">
                  <button className="stext-101 trans-09 px-3 py-2 btn-m-w">Shop Now</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            {/* Block1 */}
            <div className="block1 wrap-pic-w">
              <img src="images/cat1.jpg" alt="IMG-BANNER" />
              <Link
              href="product?category=Katan"
              className="block1-txt ab-t-l s-full flex flex-col justify-end p-lr-38 p-tb-34 trans-03 respon3"
            >
              <div className="block1-txt-child1 flex-col-l ">
              <div className="block1-txt p-b-4 trans-05">
              <div className="block1-name ltext-102  trans-04">Katan Silk Sarees</div>
              <div className="block1-info stext-102  trans-04 mt-2 mb-3">Best Seller</div>

            </div>
           
              </div>
              <div className=" p-b-4 trans-05 ">
                <button className="stext-101 trans-09 px-3 py-2 btn-m-w">Shop Now</button>
              </div>
            </Link>
           
            
            </div>
          </div>
          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            {/* Block1 */}
            <div className="block1 wrap-pic-w">
              <img src="images/cat3.jpg" alt="IMG-BANNER" />
              <Link
              href="product?category=All"
              className="block1-txt ab-t-l s-full flex flex-col justify-end p-lr-38 p-tb-34 trans-03 respon3"
            >
              <div className="block1-txt-child1 flex-col-l ">
              <div className="block1-txt p-b-4 trans-05">
              <div className="block1-name ltext-102  trans-04">All Banarasi Sarees</div>
              <div className="block1-info stext-102  trans-04 mt-2 mb-3">New Trend</div>

            </div>
           
              </div>
              <div className=" p-b-4 trans-05 ">
                <button className="stext-101 trans-09 px-3 py-2 btn-m-w">Shop Now</button>
              </div>
            </Link>
           
              
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Categories