"use client";

import React, { useState } from 'react'
import NavSearch from './NavSearch';
import Link from 'next/link';

const Header = () => {

  const [fix, setFix] = useState(false)
  const [open,setOpen]=useState(false)


  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 40){
      setFix(true)
    }
    else if (scrolled <= 40){
      setFix(false)
 
    }
  };
  

if(typeof window !== "undefined"){
  window.addEventListener('scroll', toggleVisible);
  
}

  return (
    <header>
  {/* Header desktop */}
  <div className={`container-menu-desktop ${fix?'fix-menu-desktop':''}`}>
    {/* Topbar */}
    <div className="top-bar">
  <div className="content-topbar flex-sb-m h-full container">
    <div className="left-top-bar">
      Free shipping for standard order over $100
    </div>
    <div className="right-top-bar flex-w h-full">
      <Link href="/help" className="flex-c-m trans-04 p-lr-25">
        Help &amp; FAQs
      </Link>
      <Link href="/profile" className="flex-c-m trans-04 p-lr-25">
        My Account
      </Link>
      <Link href="/en" className="flex-c-m trans-04 p-lr-25">
        EN
      </Link>
      <Link href="/usd" className="flex-c-m trans-04 p-lr-25">
        USD
      </Link>
    </div>
  </div>
</div>

   
    <div className="wrap-menu-desktop" style={{top:`${fix?'0':''}`}}>
      <nav className="limiter-menu-desktop container">
        {/* Logo desktop */}
        <Link href="/" className="logo">
          <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
        </Link>
        {/* Menu desktop */}
        <div className="menu-desktop">
          <ul className="main-menu">
            <li className="active-menu">
              <Link href="/">Home</Link>
              
            </li>
            <li>
              <Link href="/product">Shop</Link>
            </li>
            <li>
            <a  href="#">Category</a>
            <ul class="sub-menu">
              <li><Link href="/product">Mens</Link></li>
              <li><Link href="/product">Womens</Link></li>
              <li><Link href="/product">Kids</Link></li>
            </ul>
          </li>
           
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Icon header */}
        <div className="wrap-icon-header flex-w flex-r-m">
        <NavSearch/>
        <Link href="shopingcart">
          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
            data-notify={2}
          >
            <i className="zmdi zmdi-shopping-cart" />
          </div>
          </Link>
          <a
            href="#"
            className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
            data-notify={0}
          >
            <i className="zmdi zmdi-favorite-outline" />
          </a>
        </div>
      </nav>
    </div>
  </div>
  {/* Header Mobile */}
  <div className="wrap-header-mobile">
    {/* Logo moblie */}
    <div className="logo-mobile">
      <Link href="/">
        <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
      </Link>
    </div>
    {/* Icon header */}
    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
     
       <NavSearch/>


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
    {/* Button show menu */}
    <div className={`btn-show-menu-mobile hamburger hamburger--squeeze ${open?'is-active':''}`} onClick={()=>setOpen(!open)}>
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </div>
  </div>
  {/* Menu Mobile */}
  <div className="menu-mobile" style={{display: open ? 'block' : 'none'}}>
    <ul className="topbar-mobile">
      <li>
        <div className="left-top-bar">
          Free shipping for standard order over $100
        </div>
      </li>
      <li>
        <div className="right-top-bar flex-w h-full">
          <a href="#" className="flex-c-m p-lr-10 trans-04">
            Help &amp; FAQs
          </a>
          <a href="#" className="flex-c-m p-lr-10 trans-04">
            My Account
          </a>
          <a href="#" className="flex-c-m p-lr-10 trans-04">
            EN
          </a>
          <a href="#" className="flex-c-m p-lr-10 trans-04">
            USD
          </a>
        </div>
      </li>
    </ul>
    <ul className="main-menu-m">
    <li>
    <Link href="/product">Home</Link>
  </li>
      <li>
        <Link href="/product">Shop</Link>
      </li>
     
      <li>
      <a >Category</a>
      <ul class="sub-menu">
        <li><a href="index.html">Homepage 1</a></li>
        <li><a href="home-02.html">Homepage 2</a></li>
        <li><a href="home-03.html">Homepage 3</a></li>
      </ul>
    </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </div>
  {/* Modal Search */}


 
</header>

  )
}

export default Header