import React from 'react'

function Card(props) {
  return (
    <div className='border-2 rounded-lg m-4 bg-[#e6e6e6]'>
        <img className='rounded-xl p-2' src="https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className='p-2 flex justify-between'>
            <div>
                <h1 className=' text-xl'>{props.name}</h1>
                <h2 className='text-sm'>Price: ₹{props.price}</h2>
            </div>
            <button className=''>
                <i className='text-white fas fa-shopping-cart bg-[#d46b54] p-2 rounded-xl'></i>
            </button>
        </div>
    </div>
  )
}

export default Card