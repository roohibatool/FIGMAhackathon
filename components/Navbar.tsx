"use client"

    import React from 'react'
import { IoMenu,IoClose } from "react-icons/io5";
import {useState} from "react"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = ()=> {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
    <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'></div>
      <ul className='gap-10 lg:gap-16 hidden md:flex'>
      <li className='menuLink'><a href="#home">Home</a></li>
        <li className='menuLink'><a href="#allproducts">Allproducts</a></li>
        <li className='menuLink'><a href="#productsdetail">ProductsDetail</a></li>
        <li className='menuLink'><a href="#login">Login</a></li>
        <li className='menuLink'><a href="#joinus">Join Us</a></li>
        <li className='menuLink'><a href="#cart">Cart</a></li>
        <li className='menuLink'><a href="#checkout">Checkout</a></li>
      </ul>
      <div className='md:hidden' onClick={toggleMenu}>
        {isMenuOpen ? <IoClose size={30}/> :
        <IoMenu size={30} />
        }
      </div>
       {/* <IoMenu className='md:hidden' size={30}/> */}
    </div>
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
      </ul>
    )

    }
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><a href="#allproduct" onClick={toggleMenu}>All Product</a></li>
      </ul>
    )

    }
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><a href="#productdetail" onClick={toggleMenu}>Product Detail</a></li>
      </ul>
    )

    }
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><a href="#login" onClick={toggleMenu}>Login</a></li>
      </ul>
    )
  }
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
      <li><a href="#joinus" onClick={toggleMenu}>Join Us</a></li>
      </ul>
    )
    }
    
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><a href="#cart" onClick={toggleMenu}>Cart</a></li>
      </ul>
    )
  }
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><a href="#checkout" onClick={toggleMenu}>Checkout</a></li>
      </ul>
    )
    }
    </div>
    
  )
}
    export default Navbar