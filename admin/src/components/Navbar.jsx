import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2 px-[4%]'>
        <img className='h-16 w-16 sm:h-20 sm:w-20 md:h-30 md:w-30' src={assets.logo} alt="" />
        <img className='w-10' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar