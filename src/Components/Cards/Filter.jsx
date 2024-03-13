import React from 'react'
import './Filter.scss'

function Filter() {

    const searchkey = '';

    const product = [];

    const resetFilters = () => {};
    const handleResetFilters = () => {
        // Call the resetFilters function to reset filter values
        resetFilters();
    };

  return (
    <div>
        <div>
            <div className=' container mx-auto px-4 pt-5 filter'>
                <div className="p-5 filter-bg border-gray-200">
                    <div className="relative">
                        <div className="absolute flex items-center ml-2 h-full">
                            <i className='fas fa-search'></i>
                        </div>
                        <input
                            type="text"
                            name="searchkey"
                            value={searchkey}
                            onChange={(e) => {}}
                            id="searchkey"
                            placeholder="Search here"
                            className="px-8 py-3 w-full bg-[#e6e6e6] border-transparent outline-0 text-sm" />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p className="font-bold">
                            Filters
                        </p>
                        <button className="text-black text-sm font-medium filter-reset bg-[#e6e6e6] " 
                         onClick={handleResetFilters}
                        >
                            Reset Filter
                        </button>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                            <select 
                            // value={filterType} onChange={(e)=> setFilterType(e.target.value)} 
                            className="py-3 px-4  w-full  bg-[#e6e6e6] border-transparent outline-0 focus:border-gray-500 focus:bg-gray-300 focus:ring-0 text-sm filter-select" >

                                {product.map((item, index) => {
                                    return (
                                        <option key={index} value={item.category}>{item.category}</option>
                                    )
                                })}
                            </select>
                            <select 
                            // value={filterPrice} onChange={(e)=>setFilterPrice(e.target.value)} 
                            className="px-4 py-3 w-full  bg-[#e6e6e6] border-transparent outline-0  focus:border-gray-500 focus:bg-gray-300  focus:ring-0 text-sm">
                                {product.map((item, index) => {
                                    return (
                                        <option key={index} value={item.price}>{item.price}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter