import React from 'react'

const Header = () => {
  return (
    <div className='relative h-[60vw] sm:h-[45vw] md:h-[34vw] bg-[url(/header_img.png)] bg-no-repeat bg-cover bg-center'>

        <div className='absolute flex flex-col items-start gap-2 sm:gap-[1.5vw] fade-in 
                        w-[90%] sm:w-[70%] md:w-[50%] 
                        bottom-[5%] sm:bottom-[10%] 
                        left-[4vw] sm:left-[6vw] 
                        font-[outfit]'>

            <h2 className='font-bold text-xl xs:text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-amber-50 leading-snug sm:leading-tight wrap-break-words'>
              Order your favourite food here
            </h2>

            <p className='text-amber-50 text-[10px] xs:text-xs sm:text-sm md:text-[1vw] leading-snug wrap-break-words'>
              Hungry? DineNow has you covered. From local favorites to popular restaurants, order food in seconds and enjoy quick delivery, fresh meals, and a smooth ordering experience every time.
            </p>

            <button className='rounded-3xl sm:rounded-4xl text-[#B87C4C] 
                               px-3 py-1.5 sm:px-5 sm:py-3 
                               bg-amber-50 text-xs sm:text-base'>
              View Menu
            </button>
        </div>
    </div>
  )
}

export default Header