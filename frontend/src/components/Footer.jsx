import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div id='contact-us' className='flex flex-col font-[outfit] text-amber-50 bg-[#4e4e4d] mt-25 gap-5 py-8 px-6 sm:px-[4vw] items-center'>
        <div className='w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 sm:gap-20'>

            {/* Logo & description */}
            <div className='flex flex-col gap-5 items-center md:items-start text-center md:text-left'>
                <img className='h-28 w-28 sm:h-40 sm:w-40' src={assets.logo} alt="logo" />
                <p className='text-sm sm:text-base'>
                  DineNow is your go-to food delivery platform—bringing taste, convenience, and speed together in one seamless experience.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                    <img className="w-8 sm:w-10 hover:scale-110 transition-transform" src={assets.facebook_icon} />
                    <img className="w-8 sm:w-10 hover:scale-110 transition-transform" src={assets.twitter_icon} />
                    <img className="w-8 sm:w-10 hover:scale-110 transition-transform" src={assets.linkedin_icon} />
                </div>
            </div>

            {/* Company Links */}
            <div className='flex flex-col gap-4 md:gap-7 items-center md:items-start text-center md:text-left'>
                <h2 className='text-2xl sm:text-3xl font-bold text-[#e47b24]'>COMPANY</h2>
                <ul className='space-y-2'>
                    <li className='cursor-pointer hover:text-[#B87C4C] transition-colors'>Home</li>
                    <li className='cursor-pointer hover:text-[#B87C4C] transition-colors'>About us</li>
                    <li className='cursor-pointer hover:text-[#B87C4C] transition-colors'>Delivery</li>
                    <li className='cursor-pointer hover:text-[#B87C4C] transition-colors'>Privacy policy</li>
                </ul>
            </div>

            {/* Contact */}
            <div className='flex flex-col gap-4 md:gap-7 items-center md:items-start text-center md:text-left'>
                <h2 className='text-2xl sm:text-3xl font-bold text-[#e47b24]'>GET IN TOUCH</h2>
                <ul className='space-y-2'>
                    <li className='cursor-pointer'>+91 98765-43210</li>
                    <li className='cursor-pointer'>support@dinenow.com</li>
                </ul>
            </div>

        </div>

        <hr className='w-full h-px my-6 bg-[#bdbdbd] border-0' />
        <p className='text-sm sm:text-base text-center'>© 2026 DineNow. All rights reserved.</p>
    </div>
  )
}

export default Footer