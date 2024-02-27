import React from 'react'
import image from '../../assets/Bg.jpg'

function About() {
  return (
    <div className='h-screen flex items-center justify-center bg-[#e6e6e6]'>
        <div className='flex flex-col items-center justify-center bg-[#e6e6e6]'>
            <h1 className='text-7xl m-2 pb-10 text-[#16292c] font-bold'>About Us</h1>
            <hr className='border-2 m-2 border-[#16292c] w-[60%]'/>
            <div className='flex justify-center'>
                <p className='text-justify pt-10 px-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <img className='h-40 m-10 rounded-lg' src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About;