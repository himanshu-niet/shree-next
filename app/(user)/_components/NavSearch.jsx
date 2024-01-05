import React, { useState } from 'react'

const NavSearch = () => {

    const [show,setShow]=useState(false)

  return (
    <>
    
    <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search" onClick={()=>setShow(true)}>
        <i className="zmdi zmdi-search" />
      </div>


  <div className={`modal-search-header flex-c-m trans-04 js-hide-modal-search ${show?'show-modal-search':''}`}>
    <div className="container-search-header">
      <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search" onClick={()=>setShow(false)}>
        <img src="images/icons/icon-close2.png" alt="CLOSE" />
      </button>
      <form action="product" className="wrap-search-header flex-w p-l-15">
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

export default NavSearch