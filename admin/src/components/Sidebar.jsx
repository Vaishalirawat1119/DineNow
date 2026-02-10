import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-[1.5px] border-[#bdb5b5] border-t-0 text-[max(1vw,10px)]'>
        <div className='pt-12.5 pl-[20%] flex flex-col gap-5'>
            <div className='flex items-center gap-3 border border-[#bdb5b5] border-r-0 py-2 px-2.5 rounded-tl-[3px] rounded-bl-[3px] rounded-tr-none rounded-br-none cursor-pointer'>
                <img src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Items</p>
            </div>
            <div className='flex items-center gap-3 border border-[#bdb5b5] border-r-0 py-2 px-2.5 rounded-tl-[3px] rounded-bl-[3px] rounded-tr-none rounded-br-none cursor-pointer'>
                <img src={assets.order_icon} alt="" />
                <p className='hidden md:block'>List Items</p>
            </div>
            <div className='flex items-center gap-3 border border-[#bdb5b5] border-r-0 py-2 px-2.5 rounded-tl-[3px] rounded-bl-[3px] rounded-tr-none rounded-br-none cursor-pointer'>
                <img src={assets.order_icon} alt="" />
                <p className='hidden md:block'>Orders</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar