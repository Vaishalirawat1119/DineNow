import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <div className='w-[70%] ml-[max(5vw,25px)] mt-12.5 text-[#6d6d6d] text-[16px]'>
        <form className='gap-5 flex-col-base'>
            <div className='flex-col-base'>
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img className='w-30' src={assets.upload_area} alt="" />
                </label>
                <input className='input-border' type="file" id='image' hidden required/>
            </div>
            <div className='flex-col-base product-name-desc-style'>
                <p>Product Name</p>
                <input className='input-border' type="text" name="name" placeholder='Type here'/>
            </div>
            <div className='flex-col-base product-name-desc-style'>
                <p>Product Description</p>
                <textarea className='input-border' name="description" rows="6" placeholder='Write content here' required></textarea>
            </div>
            <div className='flex gap-7.5'>
                <div className='flex-col-base'>
                    <p>Product Category</p>
                    <select className='input-border' name="category">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className='flex-col-base'>
                    <p>Product Price</p>
                    <input className='input-border' type="Number" name="price" placeholder='$20'/>
                </div>
            </div>
            <button className='input-border max-w-30 p-2.5 bg-black text-white cursor-pointer' type='submit'>ADD</button>
        </form>
    </div>
  )
}

export default Add