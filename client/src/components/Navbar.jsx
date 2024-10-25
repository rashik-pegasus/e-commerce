import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
    <header>
      <nav>
        <div className='hamburger__menu'><Link to=""><GiHamburgerMenu siuze={30}/></Link></div>
        <ul className='nav__elements'>
          <li className='nav__single'><Link to="">For Her</Link> </li>

          <li className='nav__single'><Link to="" >For Him</Link></li>

          <li className='nav__single'><Link to="">unisex</Link></li>

          <li className='nav__single'><Link to="/Home">
          <img src="/assets/images/logo-commerce.jpg" alt="" /></Link></li>
            
          <li className='nav__single'><Link to="">tihar offers</Link></li>
          <li className='nav__single'><Link to="">New arrivals</Link></li>
          <li className='nav__single'><Link to="">my account</Link></li>
        </ul>

        <ul className='search__login__utility'>
            <li className='item__utility search'>
              <Link to=""><IoSearchOutline size={30}/></Link>
            </li>
            <li className='item__utility cart'>
              <Link><LuShoppingCart size={30}/></Link>
            </li>
        </ul>
      </nav>
      </header>
    </>
  )
}

export default Navbar