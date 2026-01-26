import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form>
      <div>
        <p>Delivery Information</p>
        <div>
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div>
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div>
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div>
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
              <p>2</p>
            </div>

            <hr className='my-3 border-[#e2e2e2]' />

            <div className='flex justify-between font-bold'>
              <p>Total</p>
              <p>{getTotalCartAmount()+2}</p>
            </div>
          </div>

          <button className='mt-6 w-full md:w-60 text-white bg-[#B87C4C] hover:bg-[#87552d] py-3 rounded-sm'>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder