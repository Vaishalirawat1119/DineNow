import React from 'react'

const Header = () => {
  return (
    <div className='relative h-[34vw] bg-[url(/header_img.png)] bg-no-repeat bg-contain'>
        <div className='font-[outfit]'>
            <h2 className='font-bold text-2xl'>Order your favourite food here</h2>
            <p>Hungry? DineNow has you covered. From local favorites to popular restaurants, order food in seconds and enjoy quick delivery, fresh meals, and a smooth ordering experience every time.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header