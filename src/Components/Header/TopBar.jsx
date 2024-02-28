import React from 'react'
import logo from '../../assets/LogoSample.png'

function TopBar() {
  return (
    <div className=' bg-[#e6e6e6] top-0 items-center justify-between hidden md:flex'>
      <div className='flex items-center'>
        <img className='h-[10vh] px-4 float-left' src={logo} alt="" />
        <div className=''>
            <div className='flex text-sm'>
                <i className='pt-1 fa-solid fa-phone'></i>
                <p className='px-2'>+91 - 9876543210</p>
            </div>
            <hr className='border-1 border-black w-[90%] mx-1' />
            <div className='flex px-2 text-sm'>
                <i className='pt-1 fa-solid fa-map-pin'></i>
                <h2 className='px-2 '>Meerut, Uttar Pradesh</h2>
            </div>
        </div>
      </div>

        <button className='flex text-base items-center bg-[#d46b54] px-2 m-1 rounded-xl mx-10 '>
            <i className='fa-solid fa-shopping-cart bg-[#e6e6e6] p-2 rounded-xl'></i>
            <div className='m-0 p-0'>
              <p className='mx-2 font-bold text-left'>Cart</p>
              <p className='mx-2 text-sm'>Total: ₹120</p>
            </div>
        </button>

    </div>
  )
}

export default TopBar