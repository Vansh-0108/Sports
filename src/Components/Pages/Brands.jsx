import React from 'react'

function Brands() {
    const brands = [
        {
            name: 'Yonex',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo-Yonex.svg/2560px-Logo-Yonex.svg.png',
        },
        {
            name: 'Wilson',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Wilson-logo.svg/2560px-Wilson-logo.svg.png',
        },
        {
            name: 'Li-ning',
            img: 'https://upload.wikimedia.org/wikipedia/commons/2/26/LiNing_Logo.svg'
        },
        {
            name: 'Yonex',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo-Yonex.svg/2560px-Logo-Yonex.svg.png',
        },
        {
            name: 'Wilson',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Wilson-logo.svg/2560px-Wilson-logo.svg.png',
        },
        {
            name: 'Li-ning',
            img: 'https://upload.wikimedia.org/wikipedia/commons/2/26/LiNing_Logo.svg'
        },
    ]
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#e6e6e6]'>
        <h1 className='text-7xl m-2 py-8 text-[#16292c] font-bold text-center'>Our Brands</h1>
        <hr className='border-2 border-[#16292c] w-[60%]'/>
        <div className='flex flex-wrap justify-center items-center gap-2 my-4'>
            {
                brands.map((brand, key) => <img key={key} className='p-4 w-[45%] md:w-[22%] h-full drop-shadow-2xl' src={brand.img} alt={brand.name} />)
            }
        </div>
    </div>
    
  )
}

export default Brands