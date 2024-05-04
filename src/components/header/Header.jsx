import React, {useState} from 'react'
import { Link } from 'react-router-dom'

// IMAGES
import SiteLogo from '../../images/site-logo.svg'
import MenuIcon from '../../images/menuIcon.svg'
import { IoMenu, IoSearch } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
import { FaAngleDown, FaRegHeart } from 'react-icons/fa6'
import { LuUser } from 'react-icons/lu'
import { GrCart } from 'react-icons/gr'
import { SlFire, SlRefresh } from 'react-icons/sl'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    let token = localStorage.getItem("x-auth-token")
  return (
    <header>    
        <div className="sup-header">
            <div className="container">
                <div className="sup-header__content">
                    <div className="sup-header__content--left">
                        <Link to={"/"}>About Us</Link>
                        <span>|</span>
                        <Link to={"/register"}>My Account</Link>
                        <span>|</span>
                        <Link to={"/"}>Wishlist</Link>
                        <span>|</span>
                        <Link to={"/"}>Order Tracking</Link>
                    </div>
                    <div className="sup-header__content--right">
                        <p>Need help? &nbsp; Call Us:<span>+ 1800 900</span></p>
                        <span>|</span>
                        <select name="language" id="language">
                            <option selected value="en">English</option>
                            <option value="ru">Russian</option>
                            <option value="uz">Uzbek</option>
                        </select>
                        <span>|</span>
                        <select name="value" id="value">
                            <option selected value="usd">USD</option>
                            <option value="rub">RUB</option>
                            <option value="sum">UZS</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-header">
            <div className="container">
                <div className="main-header__content">
                    <Link className='main-header__logo' to={"/"}>
                        <img src={SiteLogo} alt="Site Logo" />
                    </Link>
                    <div className="main-header__search">
                        <select name="categories" id="categories">
                            <option selected value="all">All Categories</option>
                            <option value="el">Mens clothes</option>
                            <option value="el">Womn clothes</option>
                            <option value="el">Shoes</option>
                            <option value="el">Bags</option>
                            <option value="el">Watches</option>
                        </select>
                        <span>|</span>
                        <input type="search" placeholder='Search for items...' />
                        <div><IoSearch className='main-header__search--icon'/></div>
                    </div>
                    <div className="main-header__nav">
                        <button>
                            <CiLocationOn className='main-header__nav--icon'/>
                            <select name="categories" id="categories">
                                <option selected disabled>Your Location</option>
                                <option value="all">Uzbekistan</option>
                                <option value="all">South Korea</option>
                                <option value="all">China</option>
                                <option value="all">Turkey</option>
                                <option value="all">New Zealand</option>
                            </select>
                        </button>
                        <div>
                            <Link className='main-header__nav--btns' to={"/"}>
                                <SlRefresh />
                                <span>Compare</span>
                            </Link>
                            <Link className='main-header__nav--btns' to={"/"}>
                                <FaRegHeart />
                                <span>Wishlist</span>
                            </Link>
                            <Link className='main-header__nav--btns' to={"/"}>
                                <GrCart />
                                <span>Cart</span>
                            </Link>
                            <Link className='main-header__nav--btns' to={`${token ? "/admin" : "/register"}`}>
                                <LuUser />
                                <span>{token ? "Admin" : "Account"}</span>
                            </Link>
                        </div>
                        <button onClick={() => setToggle(!toggle)} className='menu-btn'><IoMenu /></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="sub-header">
            <div className="container">
                <div className="sub-header__content">
                    <nav className="sub-header__nav">
                        <button>
                            <img src={MenuIcon} alt="" />
                            <span>Browse All Categories</span>
                            <FaAngleDown />
                        </button>
                        <ul className={`sub-header__nav--list ${toggle ? "show" : ""}`}>
                            <li>
                                <div>
                                    <SlFire />
                                    <span>Deals</span>
                                </div>
                            </li>
                            <li>
                                <select>
                                    <option value="">Home</option>
                                </select>
                            </li>
                            <li>
                                <select>
                                    <option value="">About</option>
                                </select>
                            </li>
                            <li>
                                <select>
                                    <option value="">Shop</option>
                                </select>
                            </li>
                            <li>
                                <select>
                                    <option value="">Vendors</option>
                                </select>
                            </li>
                            <li>
                                <select>
                                    <option value="">Mega menu</option>
                                </select>
                            </li>
                            <li>
                                <select>
                                    <option value="">Blog</option>
                                </select>
                            </li>
                            <li>
                                <select>
                                    <option value="">Pages</option>
                                </select>
                            </li>
                            <li>
                                <select>
                                    <option value="">Contact</option>
                                </select>
                            </li>
                        </ul>
                    </nav>
                    <div className="sub-header__call">
                        <TfiHeadphoneAlt />
                        <div>
                            <h3>1900 - 888</h3>
                            <p>24/7 Support Center</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header