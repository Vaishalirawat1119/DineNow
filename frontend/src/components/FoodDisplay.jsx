import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <div id='menu' className='mt-7.5 font-[outfit]'>
        <h2 className='font-bold text-3xl text-[#ad6d39]'>Top dishes near you</h2>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-7.5 gap-7.5 gap-y-12.5'>
            {food_list.map((item, index) => {
                if(category === "All" || category === item.category){
                    return (
                        <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                    ) 
                }
                
            })}
        </div>
    </div>
  )
}

export default FoodDisplay