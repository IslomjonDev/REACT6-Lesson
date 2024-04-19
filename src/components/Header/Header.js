import React from 'react'
import './Header.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from '../images/hedlogo.png'
import { CiSearch , CiHeart ,  CiShoppingCart } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";


const Header = () => {
  return (
    <>
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="navlogo">
                      <RxHamburgerMenu className='logo' />
                    </div>
                    <div className="nav-list">
                        <ul>
                            <li><a href="https://www.youtube.com/">Home</a></li>
                            <li><a href="">Category</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Elements</a></li>
                        </ul>
                    </div>
                    <div className="tel">
                    < BsFillTelephoneFill/>
                    <p>+123 ( 456 ) ( 7890 )</p>
                    </div>
                </div>
                <div className="navbar-bottom">
                    <div className="nb-logo">
                        <img src={logo} alt="" />
                    </div>
                    <form action="">
                        <input type="text" placeholder='Search For Items ..' />
                        <div className="search-btn">
                        <p>All Categories</p>
                        <CiSearch className='search' />
                        </div>
                    </form>
                    <div className="nb-logos">
                        <span>
                        <IoPersonSharp />
                        <p>Account</p>
                        </span>
                        <span>
                        <CiHeart  className='heart'/>
                        <p>Wishlist</p>
                        </span>
                        <span>
                        < CiShoppingCart className='heart' />
                        <p>Cart</p>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header