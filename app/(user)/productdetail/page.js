import React from 'react'

const page = () => {
  return (
    <>
  <div className="container mt-20">
    <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
      <a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
        Home
        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
      </a>
      <a href="product.html" className="stext-109 cl8 hov-cl1 trans-04">
        Men
        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
      </a>
      <span className="stext-109 cl4">Lightweight Jacket</span>
    </div>
  </div>
  {/* Product Detail */}
  <section className="sec-product-detail bg0 p-t-65 p-b-60">
    <div className="container">
      <div className="row">
        <div className="col-md-6  p-b-30">
        <img src="images/product-detail-01.jpg" alt="IMG-PRODUCT" />
        </div>
        <div className="col-md-6  p-b-30 px-5 md:px-0 ">
          <div className=" p-t-5 p-lr-0-lg">
            <h4 className="ltext-106 cl2 js-name-detail p-b-5">
            Dual Shade Pure Georgette Banarasi Bandhej Handloom Saree
            </h4>
            <h5 className='stext-106 cl1 my-2'>
            by The Our Site
</h5>
            
            <div className='my-3'>
            <span className="mtext-106 cl2 "><del className='mr-2 text-gray-500'>Rs. 5000</del>Rs. 4000</span>
            </div>
            <div>
            <span className="mtext-106 cl2">Availability: </span>
            <span className='stext-102 text-green-500'>In stock, ready to be shipped
            </span>
            

           </div>
        
            
            {/*  */}
            <div className="p-t-33">
            <div>
            <span className="mtext-102 cl2">Quantity:</span>
            </div>
            
              <div className='flex-w  p-b-10'>
              
              
              <div className="wrap-num-product flex-w m-r-20 ">
                <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                  <i className="fs-16 zmdi zmdi-minus" />
                </div>
                <input
                  className="mtext-104 cl3 txt-center num-product"
                  type="number"
                  name="num-product"
                  defaultValue={1}
                />
                <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                  <i className="fs-16 zmdi zmdi-plus" />
                </div>
              </div>
             <div>
           
         </div>
          </div>
        <div className='grid grid-cols-2 mt-10'>
        <div>  <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Add to cart
        <svg
          className="flex-shrink-0 w-4 h-4"
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
          <path d="m5 11 4-7" />
          <path d="m19 11-4-7" />
          <path d="M2 11h20" />
          <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
          <path d="m9 11 1 9" />
          <path d="M4.5 15.5h15" />
          <path d="m15 11-1 9" />
        </svg>
      </button>
        </div>
<div>
<button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900  disabled:pointer-events-none"
      >
      Buy Now
      <svg
        className="flex-shrink-0 w-4 h-4"
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
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
      </button>
      </div>
        </div>

        <div className='mt-5'>
        
      
        <ul role="list" className="space-y-2 sm:space-y-4">
        <li className="flex space-x-3">
          {/* Solid Check */}
          <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
            <svg
              className="flex-shrink-0 h-3.5 w-3.5"
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          {/* End Solid Check */}
          <span className="text-sm sm:text-base text-gray-500">
            <span className="font-bold">On Time Delivery</span>
          </span>
        </li>
        <li className="flex space-x-3">
          {/* Solid Check */}
          <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
            <svg
              className="flex-shrink-0 h-3.5 w-3.5"
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          {/* End Solid Check */}
          <span className="text-sm sm:text-base text-gray-500">
          <span className="font-bold">100% Safe and Secure</span>
        </span>
        </li>
        <li className="flex space-x-3">
          {/* Solid Check */}
          <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
            <svg
              className="flex-shrink-0 h-3.5 w-3.5"
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          {/* End Solid Check */}
          <span className="text-sm sm:text-base text-gray-500">
           <span className="font-bold">Returns , Replacements and Refunds</span>
          </span>
        </li>
      </ul>
      
        
        
       
        </div>
            </div>
            {/*  */}
           
          </div>
        </div>
      </div>
      <div className="bor10 m-t-50 p-t-43 p-b-40">
        {/* Tab01 */}
        <div className="tab01">
          {/* Nav tabs */}
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item p-b-10">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#description"
                role="tab"
              >
                Description
              </a>
            </li>
            <li className="nav-item p-b-10">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#information"
                role="tab"
              >
                Additional information
              </a>
            </li>
            <li className="nav-item p-b-10">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#reviews"
                role="tab"
              >
                Reviews (1)
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content p-t-43">
            {/* - */}
            <div
              className="tab-pane fade show active"
              id="description"
              role="tabpanel"
            >
              <div className="how-pos2 p-lr-15-md">
                <p className="stext-102 cl6">
                  Aenean sit amet gravida nisi. Nam fermentum est felis, quis
                  feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque
                  luctus dui at ante aliquet, in hendrerit lectus interdum.
                  Morbi elementum sapien rhoncus pretium maximus. Nulla lectus
                  enim, cursus et elementum sed, sodales vitae eros. Ut ex quam,
                  porta consequat interdum in, faucibus eu velit. Quisque
                  rhoncus ex ac libero varius molestie. Aenean tempor sit amet
                  orci nec iaculis. Cras sit amet nulla libero. Curabitur
                  dignissim, nunc nec laoreet consequat, purus nunc porta lacus,
                  vel efficitur tellus augue in ipsum. Cras in arcu sed metus
                  rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.
                </p>
              </div>
            </div>
            {/* - */}
            <div className="tab-pane fade" id="information" role="tabpanel">
              <div className="row">
                <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                  <ul className="p-lr-28 p-lr-15-sm">
                    <li className="flex-w flex-t p-b-7">
                      <span className="stext-102 cl3 size-205">Weight</span>
                      <span className="stext-102 cl6 size-206">0.79 kg</span>
                    </li>
                    <li className="flex-w flex-t p-b-7">
                      <span className="stext-102 cl3 size-205">Dimensions</span>
                      <span className="stext-102 cl6 size-206">
                        110 x 33 x 100 cm
                      </span>
                    </li>
                    <li className="flex-w flex-t p-b-7">
                      <span className="stext-102 cl3 size-205">Materials</span>
                      <span className="stext-102 cl6 size-206">60% cotton</span>
                    </li>
                    <li className="flex-w flex-t p-b-7">
                      <span className="stext-102 cl3 size-205">Color</span>
                      <span className="stext-102 cl6 size-206">
                        Black, Blue, Grey, Green, Red, White
                      </span>
                    </li>
                    <li className="flex-w flex-t p-b-7">
                      <span className="stext-102 cl3 size-205">Size</span>
                      <span className="stext-102 cl6 size-206">
                        XL, L, M, S
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* - */}
            <div className="tab-pane fade" id="reviews" role="tabpanel">
              <div className="row">
                <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                  <div className="p-b-30 m-lr-15-sm">
                    {/* Review */}
                    <div className="flex-w flex-t p-b-68">
                      <div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                        <img src="images/avatar-01.jpg" alt="AVATAR" />
                      </div>
                      <div className="size-207">
                        <div className="flex-w flex-sb-m p-b-17">
                          <span className="mtext-107 cl2 p-r-20">
                            Ariana Grande
                          </span>
                          <span className="fs-18 cl11">
                            <i className="zmdi zmdi-star" />
                            <i className="zmdi zmdi-star" />
                            <i className="zmdi zmdi-star" />
                            <i className="zmdi zmdi-star" />
                            <i className="zmdi zmdi-star-half" />
                          </span>
                        </div>
                        <p className="stext-102 cl6">
                          Quod autem in homine praestantissimum atque optimum
                          est, id deseruit. Apud ceteros autem philosophos
                        </p>
                      </div>
                    </div>
                    {/* Add review */}
                    <form className="w-full">
                      <h5 className="mtext-108 cl2 p-b-7">Add a review</h5>
                      <p className="stext-102 cl6">
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <div className="flex-w flex-m p-t-50 p-b-23">
                        <span className="stext-102 cl3 m-r-16">
                          Your Rating
                        </span>
                        <span className="wrap-rating fs-18 cl11 pointer">
                          <i className="item-rating pointer zmdi zmdi-star-outline" />
                          <i className="item-rating pointer zmdi zmdi-star-outline" />
                          <i className="item-rating pointer zmdi zmdi-star-outline" />
                          <i className="item-rating pointer zmdi zmdi-star-outline" />
                          <i className="item-rating pointer zmdi zmdi-star-outline" />
                          <input
                            className="dis-none"
                            type="number"
                            name="rating"
                          />
                        </span>
                      </div>
                      <div className="row p-b-25">
                        <div className="col-12 p-b-5">
                          <label className="stext-102 cl3" htmlFor="review">
                            Your review
                          </label>
                          <textarea
                            className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10"
                            id="review"
                            name="review"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-sm-6 p-b-5">
                          <label className="stext-102 cl3" htmlFor="name">
                            Name
                          </label>
                          <input
                            className="size-111 bor8 stext-102 cl2 p-lr-20"
                            id="name"
                            type="text"
                            name="name"
                          />
                        </div>
                        <div className="col-sm-6 p-b-5">
                          <label className="stext-102 cl3" htmlFor="email">
                            Email
                          </label>
                          <input
                            className="size-111 bor8 stext-102 cl2 p-lr-20"
                            id="email"
                            type="text"
                            name="email"
                          />
                        </div>
                      </div>
                      <button className="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
      <span className="stext-107 cl6 p-lr-25">SKU: JAK-01</span>
      <span className="stext-107 cl6 p-lr-25">Categories: Jacket, Men</span>
    </div>
  </section>

</>

  )
}

export default page