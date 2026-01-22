import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div id='mobile-app' className="font-medium m-auto mt-25 text-center text-[max(3vw,20px)]">
        <p>For Better Experience Download <br /> DineNow App </p>
        <div className='flex justify-center sm:gap-4 md:gap-6 lg:gap-8 mt-10'>
            <img className='w-30 sm:w-45 md:w-60 lg:w-[30vw] max-w-45 hover:scale-105 transition-all duration-500 cursor-pointer' src={assets.app_store} alt="" />
            <img className='w-30 sm:w-45 md:w-60 lg:w-[30vw] max-w-45 hover:scale-105 transition-all duration-500 cursor-pointer' src={assets.play_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload