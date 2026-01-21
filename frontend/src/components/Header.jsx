import React from 'react'

const Header = () => {
  return (
    <div className='relative h-[34vw] bg-[url(/header_img.png)] bg-no-repeat bg-contain'>
        <div className='absolute flex flex-col items-start gap-[1.5vw] fade-in max-w-[50%] bottom-[10%] left-[6vw] font-[outfit]'>
            <h2 className='font-bold w-170 text-amber-50 text-7xl'>Order your favourite food here</h2>
            <p className='text-amber-50 text-[1vw]'>Hungry? DineNow has you covered. From local favorites to popular restaurants, order food in seconds and enjoy quick delivery, fresh meals, and a smooth ordering experience every time.</p>
            <button className='rounded-4xl text-[#B87C4C] px-5 py-3 bg-amber-50'>View Menu</button>
        </div>
    </div>
  )
}

export default Header