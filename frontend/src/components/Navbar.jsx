import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("home")

  return (
    <div className='flex justify-between items-center px-4 sm:px-6 md:px-10 py-4'>
        
        <img 
          src={assets.logo} 
          alt="app logo" 
          className='h-20 w-20 sm:h-24 sm:w-24 md:h-30 md:w-30'
        />

        <ul className='hidden md:flex font-[outfit] gap-6 lg:gap-12 text-[16px] lg:text-[18px] text-[#C4A484] cursor-pointer'>
            <Link to='/' onClick={() => {setMenu("home")}} className={menu === "home" ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}>home</Link>
            <a href='#menu' onClick={() => {setMenu("menu")}} className={menu === "menu" ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}>menu</a>
            <a href='#mobile-app' onClick={() => {setMenu("mobile-app")}} className={menu === "mobile-app" ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}>mobile-app</a>
            <a href='#contact-us' onClick={() => {setMenu("contact us")}} className={menu === "contact us" ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}>contact us</a>
        </ul>

        <div className='flex items-center gap-4 sm:gap-6 md:gap-10'>
            
            <img src={assets.search_icon} alt="" className='hidden sm:block'/>

            <div className='relative hidden sm:block'>
                <img src={assets.basket_icon} alt="" />
                <div className='absolute bg-[#B87C4C] h-3 w-3 -top-2 -right-2 rounded-lg'></div>
            </div>

            <button className='bg-transparent px-4 sm:px-6 md:px-8 py-2 sm:py-3 border text-[#B87C4C] hover:text-amber-50 duration-400 ease-in-out hover:bg-[#B87C4C] border-[#B87C4C] rounded-4xl transition'>
              sign in
            </button>
        </div>
    </div>
  )
}

export default Navbar