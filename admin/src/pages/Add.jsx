import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({url}) => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name : "",
        description : "",
        price : "",
        category : "Salad"
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name] : value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);

        const response = await axios.post(`${url}/api/food/add`, formData);

        if(response.data.success){
            setData({
                name : "",
                description : "",
                price : "",
                category : "Salad"
            })
            setImage(false);
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message);
        }
    }

  return (
    <div className='w-full md:w-[85%] lg:w-[70%] px-4 md:px-0 ml-0 md:ml-[max(5vw,25px)] mt-8 md:mt-12.5 text-[#6d6d6d] text-[14px] md:text-[16px]'>
        <form className='gap-5 flex-col-base' onSubmit={onSubmitHandler}>

            <div className='flex-col-base'>
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img className='w-24 md:w-30 cursor-pointer' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                </label>
                <input 
                    onChange={(e) => setImage(e.target.files[0])} 
                    className='input-border' 
                    type="file" 
                    id='image' 
                    hidden 
                    required
                />
            </div>

            <div className='flex-col-base product-name-desc-style w-full md:w-[max(40%,280px)]'>
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} className='input-border w-full' type="text" name="name" placeholder='Type here' required/>
            </div>

            <div className='flex-col-base product-name-desc-style w-full md:w-[max(40%,280px)]'>
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} className='input-border w-full' name="description" rows="6" placeholder='Write content here' required></textarea>
            </div>

            <div className='flex gap-5 md:gap-7.5'>
                <div className='flex-col-base w-full md:w-auto'>
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} value={data.category} className='input-border w-full' name="category">
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

                <div className='flex-col-base w-full md:w-auto'>
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} className='input-border w-full' type="number" name="price" placeholder='$20'/>
                </div>
            </div>

            <button className='input-border w-full md:w-auto max-w-30 p-2.5 bg-black text-white cursor-pointer' type='submit'>
                ADD
            </button>

        </form>
    </div>
  )
}

export default Add