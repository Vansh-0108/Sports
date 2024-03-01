import React from 'react'
import Filter from '../Cards/Filter';

function AllProducts() {

    const product = [];

  return (
      <div className='min-h-screen bg-[#e6e6e6]'>
        <Filter />
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 rale-font" >Our Latest Collection</h1>
                    <div className="h-1 w-20 gold-primary rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {product.filter((obj)=> obj.title.toLowerCase().includes(searchkey))
                    .filter((obj) => obj.category.toLowerCase().includes(filterType))
                    .filter((obj) => obj.price.includes(filterPrice)).map((item, index) => {
                        const { title, price, description, imageUrl,id } = item;
                        return (
                            <div onClick={()=> window.location.href = `/#/productinfo/${id}`}   key={index} className="p-4 md:w-1/4  drop-shadow-sm cust-card  " >
                                <div className="h-full border  duration-300 ease-in-out    border-gray-400 border-opacity-20  overflow-hidden cursor-pointer" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                    <div className="flex justify-center cursor-pointer" >
                                        <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out coverobject" src={imageUrl} alt="product" />
                                    </div>
                                    <div className="p-5 border-t-2">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 rale-font" >Smaira Luxe</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3 rale-font" style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>
                                        {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                        <p className="leading-relaxed mb-3 rale-font" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price}</p>
                                        <div className=" flex justify-center">
                                            <button type="button" 
                                    
                                            className="focus:outline-none text-white gold-primary font-medium text-sm w-full  py-2 gold-primary-2 ">Order Now</button>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section >
    </div>
  )
}

export default AllProducts