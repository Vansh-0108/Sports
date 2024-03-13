import React from 'react'

function Card({name, price, img, bgColor = 'bg-[#e6e6e6]'}) {
  return (
    <div className={`border-2 rounded-lg m-1 ${bgColor} w-[45%] md:w-[22%] h-[15rem]`}>
        <div className='h-3/4 flex justify-center'>
          <img className='rounded-xl m-2 h-full object-contain border-1 border-gray-900' src={img} alt="" />
        </div>
        <div className='h-1/4 p-2 flex justify-between'>
            <div>
                <h1 className=' text-md font-bold line-clamp-1 hover:text-clip mr-2'>{name}</h1>
                <h2 className='text-sm'>Price: ₹{price}</h2>
            </div>
            <button className=''>
                <i className='text-white fas fa-shopping-cart bg-[#d46b54] p-2 rounded-xl'></i>
            </button>
        </div>
    </div>
  )
}

export default Card