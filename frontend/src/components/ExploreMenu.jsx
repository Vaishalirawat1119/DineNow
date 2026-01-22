import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='flex flex-col gap-5 font-[outfit] px-4 sm:px-6 md:px-0'>
      <h1 className='font-bold text-2xl sm:text-3xl text-[#ad6d39] pt-6'>Explore our menu</h1>

      <p className='max-w-full sm:max-w-[60%] text-sm sm:text-base'>
        Cravings calling? 📞 We’ve got answers. Dive into bold flavors, comfort bites, and must-try dishes—delivered hot and fast.
      </p>

      <div className='flex items-center gap-5 sm:gap-10 my-5 overflow-x-auto scrollbar-hide'>
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            key={index}
            className='shrink-0 w-20 sm:w-28 text-center cursor-pointer'
          >
            <img
              className={`${category === item.menu_name ? "border-4 rounded-full border-[#ad6d39] p-1" : ""} w-full`}
              src={item.menu_image}
              alt="menu-img"
            />
            <p className='mt-2 text-[16px] sm:text-[20px] text-[#8a745f]'>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className='my-4 mx-0 border-0.5 border-[#C4A484] h-1'/>
    </div>
  )
}

export default ExploreMenu