"use client";
import { usePathname } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import NavSearch from './NavSearch';
import Link from 'next/link';
import Auth from './Auth';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const Header = () => {
  const pathname = usePathname();

  const [fix, setFix] = useState(false)
  const [open, setOpen] = useState(false)


  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 40) {
      setFix(true)
    }
    else if (scrolled <= 40) {
      setFix(false)

    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  });

  return (
    <header className='w-full'>
      {/* Header desktop */}
      <div className={`container-menu-desktop ${fix ? 'fix-menu-desktop' : ''}`}>
        {/* Topbar */}
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">
              Free National shipping for standard order over ₹10000
            </div>
            <div className="right-top-bar flex-w h-full">
              <Link href="/faqs" className="flex-c-m trans-04 p-lr-25">
                Help &amp; FAQs
              </Link>
              <Link href="/profile" className="flex-c-m trans-04 p-lr-25">
                My Account
              </Link>

            </div>
          </div>
        </div>


        <div className="wrap-menu-desktop bg-white" style={{ top: `${fix ? '0' : ''}` }}>
          <nav className="limiter-menu-desktop container">
            {/* Logo desktop */}
            <Link href="/" className="logo">
              <img src="logo.png" alt="IMG-LOGO" />
            </Link>
            {/* Menu desktop */}
            <div className="menu-desktop">
              <ul className="main-menu">
                <li className={pathname == '/' ? 'active-menu' : ''}>
                  <Link href="/">Home</Link>

                </li>
                <li className={pathname == '/product' ? 'active-menu' : ''}>
                  <Link href="product">Shop</Link>
                </li>
                <li>
                  <a href="#">Category</a>
                  <ul className="sub-menu">
<li><a href="#">Georgette Sarees</a>
  <ul className="sub-menu ml-2">
    <li><Link href="product?subCategory=Silver Zari">Silver Zari</Link></li>
    <li><Link href="product?subCategory=Water Zari">Water Zari</Link></li>
    <li><Link href="product?subCategory=Meenakari Work">Meenakari Work</Link></li>
    <li><Link href="product?subCategory=Antique Zari">Antique Zari</Link></li>
    <li><Link href="product?subCategory=Gold Zari">Gold Zari</Link></li>
    <li><Link href="product?subCategory=Chikankari">Chikankari</Link></li>
    <li><Link href="product?subCategory=Bandhani">Bandhani</Link></li>
  </ul></li>

<li><a href="#">Katan Silk Sarees</a>
  <ul className="sub-menu ml-2">
    <li><Link href="product?subCategory=Jaal Work">Jaal Work</Link></li>
    <li><Link href="product?subCategory=Kadua Motifs">Kadua Motifs</Link></li>
    <li><Link href="product?subCategory=Kadua Jangla">Kadua Jangla</Link></li>
  </ul></li>
<li><Link href="product?category=Tussar">Tussar Silk Sarees</Link>
</li>
<li><Link href="product?subCategory=Kora">Kora Silk Sarees</Link></li>
<li><Link href="product?subCategory=Organza">Organza Sarees</Link></li>
<li><Link href="product?subCategory=Chiffon">Chiffon Sarees</Link></li>
<li><Link href="product?subCategory=Dupion">Dupion Silk Saree</Link></li>
<li><Link href="product?subCategory=Tissue">Tissue Sarees</Link></li>

                  </ul>
                </li>

                <li className={pathname == '/about' ? 'active-menu' : ''}>
                  <Link href="/about">About</Link>
                </li>
                <li className={pathname == '/contact' ? 'active-menu' : ''}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            {/* Icon header */}
            <div className="wrap-icon-header flex-w flex-r-m">
              <NavSearch />
              <Link href="shopingcart">
                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify={2}
                >
                  <i className="zmdi zmdi-shopping-cart" />
                </div>
              </Link>
              <Auth />
            </div>
          </nav>
        </div>
      </div>
      {/* Header Mobile */}
      <div className="wrap-header-mobile">
        {/* Logo moblie */}
        <div className="logo-mobile">
          <Link href="/">
            <img src="logo.png" alt="IMG-LOGO" />
          </Link>
        </div>
        {/* Icon header */}
        <div className="wrap-icon-header flex-w flex-r-m m-r-15">

          <NavSearch />

          <Link href="shopingcart">
          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
            data-notify={2}
          >
            <i className="zmdi zmdi-shopping-cart" />
          </div>
          </Link>
          <Auth />
        </div>
        {/* Button show menu */}
        <div className={`btn-show-menu-mobile hamburger hamburger--squeeze ${open ? 'is-active' : ''}`} onClick={() => setOpen(!open)}>
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </div>
      </div>

      
      {/* Menu Mobile */}
      <div className="menu-mobile" style={{ display: open ? 'block' : 'none' }}>
        <ul className="topbar-mobile">
          <li>
            <div className="left-top-bar">
              Free shipping for standard order over $100
            </div>
          </li>
          <li>
            <div className="right-top-bar flex-w h-full">
              <Link href="faqs" className="flex-c-m p-lr-10 trans-04">
                Help &amp; FAQs
              </Link>
              <Link href="#" className="flex-c-m p-lr-10 trans-04">
                My Account
              </Link>

            </div>
          </li>
        </ul>

        <ul className="main-menu-m">
          <li className="active-menu">
            <Link href="/">Home</Link>

          </li>
          <li>
            <Link href="product">Shop</Link>
          </li>
          <li>
          <Dropdown>
          <DropdownTrigger>
            <a>Category</a>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="1"><Link className='cl1' href="product?category=Georgette">Georgette Sarees</Link></DropdownItem>
            <DropdownItem key="2"><Link className='cl1' href="product?category=Katan">Katan Silk Sarees</Link></DropdownItem>
            <DropdownItem key="3"><Link className='cl1' href="product?category=Tussar">Tussar Silk Sarees</Link></DropdownItem>

            <DropdownItem key="4"><Link className='cl1' href="product?subCategory=Kora">Kora Silk Sarees</Link>
            </DropdownItem>
            <DropdownItem key="5"><Link className='cl1' href="product?subCategory=Organza">Organza Sarees</Link>
            </DropdownItem>
            <DropdownItem key="6"><Link className='cl1' href="product?subCategory=Chiffon">Chiffon Sarees</Link>
            </DropdownItem>
            <DropdownItem key="7"><Link className='cl1' href="product?subCategory=Dupion">Dupion Silk Saree</Link>
            </DropdownItem>
            <DropdownItem key="8"><Link className='cl1' href="product?subCategory=Tissue">Tissue Sarees</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
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