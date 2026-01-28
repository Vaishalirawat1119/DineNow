import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='flex flex-col lg:flex-row items-start justify-between gap-12.5 mt-25 font-[outfit]'>
      <div className='w-full lg:w-1/2'>
        <p className='text-[30px] font-bold mb-12.5'>Delivery Information</p>
        <div className='flex flex-col sm:flex-row gap-2.5'>
          <input className='mb-3.75 w-full sm:w-1/2 p-2.5 border border-[#c5c5c5] rounded-sm outline-[#B87C4C]' type="text" placeholder='First name'/>
          <input className='mb-3.75 w-full sm:w-1/2 p-2.5 border border-[#c5c5c5] rounded-sm outline-[#B87C4C]' type="text" placeholder='Last name'/>
        </div>
        <input className='mb-3.75 w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-[#B87C4C]' type="email" placeholder='Email address'/>
        <input className='mb-3.75 w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-[#B87C4C]' type="text" placeholder='Street'/>
        <div className='flex flex-col sm:flex-row gap-2.5'>
          <input className='mb-3.75 w-full sm:w-1/2 p-2.5 border border-[#c5c5c5] rounded-sm outline-[#B87C4C]' type="text" placeholder='City'/>
          <input className='mb-3.75 w-full sm:w-1/2 p-2.5 border border-[#c5c5c5] rounded-sm outline-[#B87C4C]' type="text" placeholder='State'/>
        </div>
        <div className='flex flex-col sm:flex-row gap-2.5'>
          <input className='mb-3.75 w-full sm:w-1/2 p-2.5 border border-[#c5c5c5] rounded-sm outline-[#B87C4C]' type="text" placeholder='Zip code'/>
          <input className='mb-3.75 w-full sm:w-1/2 p-2.5 border border-[#c5c5c5] rounded-sm outline-[#B87C4C]' type="text" placeholder='Country'/>
        </div>
        <input className='mb-3.75 w-full p-2.5 border border-[#c5c5c5] rounded-sm outline-[#B87C4C]' type="text" placeholder='Phone'/>
      </div>
      <div className='w-full lg:w-1/2 mt-10 lg:mt-0'>
        <div className='flex-1'>
          <h2 className='font-bold text-2xl mb-4'>Cart Totals</h2>

          <div className='w-full max-w-md'>
            <div className='flex justify-between text-gray-500'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>

            <hr className='my-3 border-[#e2e2e2]' />

            <div className='flex justify-between text-gray-500'>
              <p>Delivery fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>

            <hr className='my-3 border-[#e2e2e2]' />

            <div className='flex justify-between font-bold'>
              <p>Total</p>
              <p>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+2}</p>
            </div>
          </div>

          <button className='mt-7.5 w-full md:w-60 text-white bg-[#B87C4C] hover:bg-[#87552d] py-3 rounded-sm'>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder