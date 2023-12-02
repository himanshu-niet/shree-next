import React from 'react'

const NavOperation = () => {
  return (
    <>
    
    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
      <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
        <i className="zmdi zmdi-search" />
      </div>
      <div
        className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
        data-notify={2}
      >
        <i className="zmdi zmdi-shopping-cart" />
      </div>
      <a
        href="#"
        className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
        data-notify={0}
      >
        <i className="zmdi zmdi-favorite-outline" />
      </a>
    </div>
    
    
    <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
    <div className="container-search-header">
      <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
        <img src="images/icons/icon-close2.png" alt="CLOSE" />
      </button>
      <form className="wrap-search-header flex-w p-l-15">
        <button className="flex-c-m trans-04">
          <i className="zmdi zmdi-search" />
        </button>
        <input
          className="plh3"
          type="text"
          name="search"
          placeholder="Search..."
        />
      </form>
    </div>
  </div>
    </>
  )
}

export default NavOperation