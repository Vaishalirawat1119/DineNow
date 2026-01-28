import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeToCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='mt-10 font-[outfit]'>

      {/* TABLE HEADER (hide on mobile) */}
      <div className='hidden md:grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]'>
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr className='hidden md:block my-4' />

      {/* CART ITEMS */}
      {food_list.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={item._id} className='mb-4'>

              {/* DESKTOP ROW */}
              <div className='hidden md:grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)]'>
                <img className='w-12' src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p onClick={() => removeToCart(item._id)} className='cursor-pointer'>x</p>
              </div>

              {/* MOBILE CARD */}
              <div className='md:hidden flex gap-4 items-center bg-gray-50 p-4 rounded-lg'>
                <img className='w-16 h-16 object-cover rounded' src={item.image} alt="" />
                <div className='flex-1 text-sm'>
                  <p className='font-semibold'>{item.name}</p>
                  <p className='text-gray-500'>Price: ${item.price}</p>
                  <p className='text-gray-500'>Qty: {cartItems[item._id]}</p>
                  <p className='font-semibold'>Total: ${item.price * cartItems[item._id]}</p>
                </div>
                <button
                  onClick={() => removeToCart(item._id)}
                  className='text-red-500 text-lg font-bold'
                >
                  ×
                </button>
              </div>

              <hr className='h-px border-[#e2e2e2] mt-3' />
            </div>
          )
        }
      })}

      {/* TOTALS SECTION */}
      <div className='mt-16 flex flex-col md:flex-row gap-10'>

        {/* CART TOTALS */}
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

          <button onClick={() => navigate('/order')} className='mt-6 w-full md:w-60 text-white bg-[#B87C4C] hover:bg-[#87552d] py-3 rounded-sm'>
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* PROMO CODE */}
        <div className='flex-1 max-w-md'>
          <p className='text-gray-500 mb-2'>If you have a promo code, enter it here</p>
          <div className='flex bg-[#eaeaea] rounded-sm overflow-hidden'>
            <input
              className='flex-1 bg-transparent px-3 py-2 outline-none'
              type="text"
              placeholder='Promo code'
            />
            <button className='px-6 bg-black text-white'>
              Submit
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart