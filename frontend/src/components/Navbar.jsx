import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { name: "home" },
    { name: "menu" },
    { name: "mobile-app" },
    { name: "contact us" },
  ]

  return (
    <nav className='flex justify-between items-center px-4 md:px-10 py-4 relative bg-transparent'>
      
      {/* Logo */}
      <img 
        src={assets.logo} 
        alt="app logo" 
        className='h-20 w-20 md:h-30 md:w-30'
      />

      {/* Desktop Menu */}
      <ul className='hidden md:flex font-[outfit] gap-6 lg:gap-12 text-[16px] lg:text-[18px] text-[#C4A484] cursor-pointer'>
        {navItems.map(item => (
          <li 
            key={item.name}
            onClick={() => setMenu(item.name)}
            className={menu === item.name ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Hamburger for mobile */}
      <div className='md:hidden flex items-center'>
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          <img src={assets.hamburger_icon} alt="menu" className='w-8 h-8' />
        </button>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-4 md:gap-6 lg:gap-10 ml-4'>
        <img src={assets.search_icon} alt="search" className='w-6 h-6 sm:w-8 sm:h-8'/>
        <div className='relative'>
            <img src={assets.basket_icon} alt="basket" className='w-6 h-6 sm:w-8 sm:h-8' />
            <div className='absolute bg-[#B87C4C] h-3 w-3 -top-1 -right-1 rounded-full'></div>
        </div>
        <button className='bg-transparent px-3 sm:px-4 md:px-8 py-2.5 sm:py-3 md:py-3 border text-sm sm:text-base md:text-base text-[#B87C4C] hover:text-amber-50 hover:bg-[#B87C4C] border-[#B87C4C] rounded-3xl sm:rounded-4xl transition-colors duration-300 shadow-sm hover:shadow-md'>
            sign in
        </button>
       </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className='absolute top-full left-0 w-full bg-[#4e4e4d] flex flex-col items-center gap-6 py-6 md:hidden z-50'>
          {navItems.map(item => (
            <button 
              key={item.name}
              onClick={() => { setMenu(item.name); setMobileOpen(false) }}
              className={menu === item.name ? "text-[#B87C4C] font-semibold text-lg" : "text-amber-50 text-lg"}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}

    </nav>
  )
}
export default Navbar