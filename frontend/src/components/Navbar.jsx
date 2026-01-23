import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home")
  const [open, setOpen] = useState(false)

  return (
    <div className='relative'>
      <div className='flex justify-between items-center px-3 sm:px-6 md:px-10 py-3'>

        <Link to='/'>
        <img
          src={assets.logo}
          alt="app logo"
          className='h-16 w-16 sm:h-20 sm:w-20 md:h-30 md:w-30'
        />
        </Link>

        <ul className='hidden md:flex font-[outfit] gap-6 lg:gap-12 text-[16px] lg:text-[18px] text-[#C4A484] cursor-pointer'>
          <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}>home</Link>
          <a href='#menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}>menu</a>
          <a href='#mobile-app' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}>mobile-app</a>
          <a href='#contact-us' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}>contact us</a>
        </ul>

        <div className='flex items-center justify-between w-full md:w-auto md:gap-10'>

          <div className='flex items-center gap-3 md:hidden'>
            <button
              onClick={() => setOpen(!open)}
              className='text-2xl text-[#B87C4C]'
            >
              ☰
            </button>

            <img
              src={assets.search_icon}
              alt=""
              className='w-5 h-5'
            />

            <div className='relative'>
              <img
                src={assets.basket_icon}
                alt=""
                className='w-5 h-5'
              />
              <div className='absolute bg-[#B87C4C] h-2 w-2 -top-1 -right-1 rounded-full'></div>
            </div>
          </div>

          <div className='hidden md:flex items-center gap-6'>
            <img src={assets.search_icon} alt="" />
            <div className='relative'>
              <Link to='/cart'>
              <img src={assets.basket_icon} alt="" />
              </Link>
              <div className='absolute bg-[#B87C4C] h-3 w-3 -top-2 -right-2 rounded-lg'></div>
            </div>
          </div>

          <button
            onClick={() => setShowLogin(true)}
            className='
              bg-transparent 
              px-3 py-1.5    
              sm:px-5 sm:py-2.5
              md:px-8 md:py-3
              border border-[#B87C4C]
              text-[#B87C4C]
              text-sm sm:text-base
              hover:text-amber-50 hover:bg-[#B87C4C]
              rounded-full
              transition
            '
          >
            sign in
          </button>
        </div>
      </div>

      {open && (
        <ul className='md:hidden flex flex-col items-center gap-5 py-5 bg-white font-[outfit] text-[#C4A484] text-[17px] shadow-md'>
          <Link to='/' onClick={() => { setMenu("home"); setOpen(false) }}>home</Link>
          <a href='#menu' onClick={() => { setMenu("menu"); setOpen(false) }}>menu</a>
          <a href='#mobile-app' onClick={() => { setMenu("mobile-app"); setOpen(false) }}>mobile-app</a>
          <a href='#contact-us' onClick={() => { setMenu("contact us"); setOpen(false) }}>contact us</a>
        </ul>
      )}
    </div>
  )
}

export default Navbar