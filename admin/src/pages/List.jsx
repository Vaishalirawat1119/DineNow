import React, { useEffect, useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error("Error");
    }
  }

  const removeFood = async (foodId) => {
    // console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message);
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='w-full md:w-[85%] lg:w-[70%] px-4 md:px-0 ml-0 md:ml-[max(5vw,25px)] mt-8 md:mt-12.5 text-[#6d6d6d] text-[14px] md:text-[16px] flex-col-base'>
      <p>All Foods List</p>
      <div>
        <div className='list-table-format bg-[#f9f9f9]'>
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img className='w-12.5' src={`${url}/image/` +item.image} alt=""/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className='cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List