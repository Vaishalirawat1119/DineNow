import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const Cart = () => {
  const {cartItems, food_list, removeToCart} = useContext(StoreContext)
  return (
    <div className='mt-25 font-[outfit]'>
      <div>
        <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-400 text-[max(1vw,12px)]'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if(cartItems[item._id] > 0){
            return (
              <div>
                <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] text-[max(1vw,12px)] items-center my-2.5 mx-0 text-black'>
                  <img className='w-12.5' src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeToCart(item._id)} className='cursor-pointer'>x</p>
                </div>
                <hr className='h-px border-[#e2e2e2]' />
              </div>
            )
          }
        })}
      </div>
      <div>
        <div>
          <h2>Cart Totals</h2>
          <div>
            <div>
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr />
            <div>
              <p>Delivery fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div>
              <p>Total</p>
              <p>{0}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart