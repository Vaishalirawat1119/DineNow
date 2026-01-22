import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col font-[outfit] text-amber-50 bg-[#4e4e4d] mt-25 gap-5 py-2 px-[4vw] pt-20 items-center'>
        <div className='w-full grid grid-cols-[2fr_1fr_1fr] gap-20'>
            <div className='flex flex-col gap-7 items-start'>
                <img className='h-40 w-40' src={assets.logo} alt="" />
                <p>DineNow is your go-to food delivery platform—bringing taste, convenience, and speed together in one seamless experience.</p>
                <div className="flex gap-4">
                    <img className="w-10 hover:scale-110 transition-transform" src={assets.facebook_icon} />
                    <img className="w-10 hover:scale-110 transition-transform" src={assets.twitter_icon} />
                    <img className="w-10 hover:scale-110 transition-transform" src={assets.linkedin_icon} />
                </div>
            </div>
            <div className='flex flex-col gap-7 items-start'>
                <h2 className='text-3xl font-bold text-[#e47b24]'>COMAPNY</h2>
                <ul>
                    <li className='mb-2.5 cursor-pointer'>Home</li>
                    <li className='mb-2.5 cursor-pointer'>About us</li>
                    <li className='mb-2.5 cursor-pointer'>Delivery</li>
                    <li className='mb-2.5 cursor-pointer'>Privacy policy</li>
                </ul>
            </div>
            <div className='flex flex-col gap-7 items-start'>
                <h2 className='text-3xl font-bold text-[#e47b24]'>GET IN TOUCH</h2>
                <ul>
                    <li className='mb-2.5 cursor-pointer'>+91 98765-43210</li>
                    <li className='mb-2.5 cursor-pointer'>support@dinenow.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-0.5 my-5 mx-0 bg-[#bdbdbd] border-0' />
        <p>© 2026 DineNow. All rights reserved.</p>
    </div>
  )
}

export default Footer