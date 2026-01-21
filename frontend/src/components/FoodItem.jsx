import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({id, name, description, price, image}) => {
  const {cartItems, addToCart,  removeToCart} = useContext(StoreContext);

  return (
    <div className='w-full shadow-sm m-auto rounded-2xl transition-all duration-1000 fade-in'>
      <div className='relative'>
        <img className='w-full rounded-t-lg' src={image} alt="" />
        {!cartItems[id] 
          ? <img className='w-8.75 absolute right-3.75 bottom-3.75 rounded-full' onClick={() => addToCart(id)} src={assets.add_icon_white} alt=""/>
          : <div className='absolute right-3.75 bottom-3.75 flex items-center gap-2.5 p-1.5 rounded-[50px] bg-amber-50'>
              <img className='w-7.5' onClick={() => removeToCart(id)} src={assets.remove_icon_red} alt=""/>
              <p>{cartItems[id]}</p>
              <img className='w-7.5' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className='p-5'>
        <div className='flex justify-between -ml-1.5 items-center mb-2.5'>
          <p className='text-[20px] font-semibold'>{name}</p>
          <img className='w-17.5' src={assets.rating_starts} alt="" />
        </div>
        <p className='-ml-1.5 text-[12px] font-medium text-[#9a9998]'>{description}</p>
        <p className='text-[#ad6d39] font-semibold -ml-1.5 my-2.5 mx-0 text-[22px]'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem