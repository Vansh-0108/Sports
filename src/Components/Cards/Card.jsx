import React from 'react'

function Card(props) {
  return (
    <div className='border-2 rounded-lg m-1 bg-[#e6e6e6] w-[45%] md:w-[22%]'>
        <img className='rounded-xl p-2' src={props.img} alt="" />
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