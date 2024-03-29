import React from 'react'
import logo from '../../assets/LogoSample.png';
import {NavLink} from 'react-router-dom'


function Footer() {
  return (
    <div className='bg-[#16292c]'>
        <hr className='border-1'/>
        <div className='md:flex hidden text-[#e6e6e6]'>
            <div className='pl-10 flex flex-col items-center w-1/3'>
                <div className='flex p-2 w-[80%] mt-4'>
                    <img className='h-16 bg-[#e6e6e6] rounded-lg' src={logo} alt="" />
                </div>
                <div className='px-2 w-[80%] m-2'>
                    <div className='flex items-baseline text-[#D3AD7F]'>
                        <i className='pt-1 text-xl fa-solid fa-phone'></i>
                        <h2 className='px-2 text-xl '>Contact </h2>
                    </div>
                    <div className='text-sm'>
                        <h2 className='px-2'>+91 9876543210</h2>
                        <h2 className='px-2'> mishasport1992@gmail.com</h2>
                    </div>
                </div>
                <div className='px-2 w-[80%] m-2'>
                    <div className='flex items-baseline text-[#D3AD7F]'>
                        <i className='pt-1 text-xl fa-solid fa-map-pin'></i>
                        <h2 className='px-2 text-xl '>Address </h2>
                    </div>
                    <div className='text-sm'>
                        <h2 className='px-2'>Suraj Kund Road, </h2>
                        <h2 className='px-2'> Meerut, Uttar Pradesh</h2>
                    </div>
                </div>
            </div>
            <div className='flex flex-col p-10 w-1/3 items-center'>
                <h1 className='m-2 p-2 text-[#D3AD7F] text-xl font-semibold'>Title-1</h1>
                <hr className='m-1 mb-2 border-[3px] w-[30%] mx-2 rounded' />
                <NavLink to='/' className='mx-2 p-1 text-[#e6e6e6] text-base hover:text-[#d3ad7f]'>Subtitle-1</NavLink>
                <NavLink to='/' className='mx-2 p-1 text-[#e6e6e6] text-base hover:text-[#d3ad7f]'>Subtitle-2</NavLink>
                <NavLink to='/' className='mx-2 p-1 text-[#e6e6e6] text-base hover:text-[#d3ad7f]'>Subtitle-3</NavLink>
                <NavLink to='/' className='mx-2 p-1 text-[#e6e6e6] text-base hover:text-[#d3ad7f]'>Subtitle-4</NavLink>
            </div>
            <div className='flex flex-col p-10 w-1/3 items-center'>
                <h1 className='m-2 p-2 text-[#D3AD7F] text-xl font-semibold'>Title-2</h1>
                <hr className='m-1 mb-2 border-[3px] w-[30%] mx-2 rounded' />
                <NavLink to='/' className='mx-2 p-1 text-[#e6e6e6] text-base hover:text-[#d3ad7f]'>Subtitle-1</NavLink>
                <NavLink to='/' className='mx-2 p-1 text-[#e6e6e6] text-base hover:text-[#d3ad7f]'>Subtitle-2</NavLink>
                <NavLink to='/' className='mx-2 p-1 text-[#e6e6e6] text-base hover:text-[#d3ad7f]'>Subtitle-3</NavLink>
                <NavLink to='/' className='mx-2 p-1 text-[#e6e6e6] text-base hover:text-[#d3ad7f]'>Subtitle-4</NavLink>
            </div>
            {/* <div className='flex flex-col p-10 w-1/3 items-center'>
                <h1 className='m-2 p-2 text-[#D3AD7F] text-xl font-semibold'>Title-3</h1>
                <hr className='m-1 mb-2 border-[3px] w-[30%] mx-2 rounded' />
                <NavLink to='/' className='mx-2 p-1 text-[#e6e6e6] text-base hover:text-[#d3ad7f]'>Subtitle-1</NavLink>
                <NavLink to='/' className='mx-2 p-1 text-[#e6e6e6] text-base hover:text-[#d3ad7f]'>Subtitle-2</NavLink>
                <NavLink to='/' className='mx-2 p-1 text-[#e6e6e6] text-base hover:text-[#d3ad7f]'>Subtitle-3</NavLink>
                <NavLink to='/' className='mx-2 p-1 text-[#e6e6e6] text-base hover:text-[#d3ad7f]'>Subtitle-4</NavLink>
            </div> */}
        </div>

        <div className='md:hidden flex flex-col text-[#e6e6e6]'>

            <div className='flex items-center justify-center p-2 mt-4'>
                <img className='h-16 bg-[#e6e6e6] rounded-lg' src={logo} alt="" />
            </div>

            <div className='flex flex-col p-3 items-center'>
                <h1 className='p-1 text-[#D3AD7F] text-base font-semibold text-center'>Title-1</h1>
                <hr className='mb-1 border-[1px] w-[30%] rounded' />
                <NavLink to='/' className='text-[#e6e6e6] text-sm hover:text-[#d3ad7f] text-center'>Subtitle-1</NavLink>
                <NavLink to='/' className='text-[#e6e6e6] text-sm hover:text-[#d3ad7f] text-center'>Subtitle-2</NavLink>
                <NavLink to='/' className='text-[#e6e6e6] text-sm hover:text-[#d3ad7f] text-center'>Subtitle-3</NavLink>
                <NavLink to='/' className='text-[#e6e6e6] text-sm hover:text-[#d3ad7f] text-center'>Subtitle-4</NavLink>
            </div>
            <div className='flex flex-col p-3 items-center'>
                <h1 className='p-1 text-[#D3AD7F] text-base font-semibold text-center'>Title-2</h1>
                <hr className='mb-1 border-[1px] w-[30%] rounded' />
                <NavLink to='/' className='text-[#e6e6e6] text-sm hover:text-[#d3ad7f] text-center'>Subtitle-1</NavLink>
                <NavLink to='/' className='text-[#e6e6e6] text-sm hover:text-[#d3ad7f] text-center'>Subtitle-2</NavLink>
                <NavLink to='/' className='text-[#e6e6e6] text-sm hover:text-[#d3ad7f] text-center'>Subtitle-3</NavLink>
                <NavLink to='/' className='text-[#e6e6e6] text-sm hover:text-[#d3ad7f] text-center'>Subtitle-4</NavLink>
            </div>
            {/* <div className='flex flex-col p-3 items-center'>
                <h1 className='p-1 text-[#D3AD7F] text-base font-semibold text-center'>Title-3</h1>
                <hr className='mb-1 border-[1px] w-[30%] rounded' />
                <NavLink to='/' className='text-[#e6e6e6] text-sm hover:text-[#d3ad7f] text-center'>Subtitle-1</NavLink>
                <NavLink to='/' className='text-[#e6e6e6] text-sm hover:text-[#d3ad7f] text-center'>Subtitle-2</NavLink>
                <NavLink to='/' className='text-[#e6e6e6] text-sm hover:text-[#d3ad7f] text-center'>Subtitle-3</NavLink>
                <NavLink to='/' className='text-[#e6e6e6] text-sm hover:text-[#d3ad7f] text-center'>Subtitle-4</NavLink>
            </div> */}

            <div className='flex justify-center pb-4'>
                <div className='flex flex-col items-center my-2'>
                    <div className='flex items-baseline text-[#D3AD7F]'>
                        <i className='pt-1 text-xl fa-solid fa-phone'></i>
                        <h2 className='pl-2 text-base text-center'>Contact </h2>
                    </div>
                    <div className='text-sm'>
                        <h2 className='text-center text-xs'>+91 9876543210</h2>
                        <h2 className='text-center text-xs'> mishasport1992@gmail.com</h2>
                    </div>
                </div>
                <div className='flex flex-col items-center my-2 px-6'>
                   <div className='border h-full w-0'></div>
                </div>            
                <div className='flex flex-col items-center my-2'>
                    <div className='flex items-baseline text-[#D3AD7F]'>
                        <i className='pt-1 text-xl fa-solid fa-map-pin'></i>
                        <h2 className='pl-2 text-base text-center'>Address </h2>
                    </div>
                    <div className='text-sm w-full'>
                        <h2 className='text-center text-xs'>Suraj Kund Road, </h2>
                        <h2 className='text-center text-xs'> Meerut, Uttar Pradesh</h2>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer