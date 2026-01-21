import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [menu, setMenu] = useState("home")

  return (
    <div className='flex justify-between items-center'>
        <img src={assets.logo} alt="app logo" className='h-30 w-30'/>
        <ul className='flex font-[outfit] gap-12 text-[18px] text-[#C4A484] cursor-pointer'>
            <li onClick={() => {setMenu("home")}} className={menu === "home" ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}>home</li>
            <li onClick={() => {setMenu("menu")}} className={menu === "menu" ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}>menu</li>
            <li onClick={() => {setMenu("mobile-app")}} className={menu === "mobile-app" ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}>mobile-app</li>
            <li onClick={() => {setMenu("contact us")}} className={menu === "contact us" ? "text-[#B87C4C] border-b-2 border-[#B87C4C] font-semibold" : ""}>contact us</li>
        </ul>
        <div className='flex items-center gap-10'>
            <img src={assets.search_icon} alt="" />
            <div className='relative'>
                <img src={assets.basket_icon} alt="" />
                <div className='absolute bg-[#B87C4C] h-3 w-3 -top-2 -right-2 rounded-lg'></div>
            </div>
            <button className='bg-transparent px-8 py-3 border text-[#B87C4C] hover:text-amber-50 duration-400 ease-in-out hover:bg-[#B87C4C] border-[#B87C4C] rounded-4xl transition'>sign in</button>
        </div>
    </div>
  )
}

export default Navbar