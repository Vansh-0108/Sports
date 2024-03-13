import React, { useEffect, useState } from 'react'
import Filter from '../Cards/Filter';
import Card from '../Cards/Card';

function AllProducts() {

    const [products, setProducts] = useState([]);

    const [state, setState] = useState({
        searchkey: '',
        list: []
    })

    const handleChange = (e) => {
        const result = products.filter((product) => {
            if(e.target.value === '') return product
            return product.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setState({
            searchkey: e.target.value, 
            list: result
        })
    }

    // const resetFilters = () => {};
    // const handleResetFilters = () => {
    //     // Call the resetFilters function to reset filter values
    //     resetFilters();
    // };

    const getAllProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
        setProducts(data);
    }

    useEffect(() => {
        getAllProducts();
        setState({
            searchkey: '',
            list: products
        })
    }, [])

  return (
      <div className='min-h-screen bg-[#e6e6e6]'>
        {/* <Filter /> */}
        
        <div className=' container mx-auto px-4 pt-5 filter'>
            <div className="p-5 filter-bg border-gray-200">
                <div className="relative">
                    <div className="absolute flex items-center ml-2 h-full">
                        <i className='fas fa-search'></i>
                    </div>
                    <input
                        type="text"
                        name="searchkey"
                        value={state.searchkey}
                        onChange={handleChange}
                        id="searchkey"
                        placeholder="Search here"
                        className="px-8 py-3 w-full bg-[#e6e6e6] border-transparent outline-0 text-sm"
                    />
                </div>
                {/* <div className="flex items-center justify-between mt-4">
                    <p className="font-bold">
                        Filters
                    </p>
                    <button className="text-black text-sm font-medium filter-reset bg-[#e6e6e6] " onClick={handleResetFilters}>
                        Reset Filter
                    </button>
                </div> */}
                {/* <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        <select 
                        // value={filterType} onChange={(e)=> setFilterType(e.target.value)} 
                        className="py-3 px-4  w-full  bg-[#e6e6e6] border-transparent outline-0 focus:border-gray-500 focus:bg-gray-300 focus:ring-0 text-sm filter-select" >

                            {
                                product.map((item, index) => <option key={index} value={item.category}> {item.category} </option>)
                            }
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
                </div> */}
            </div>
        </div>

        <div className='bg-[#16292c] mx-4 mt-4 flex flex-col items-baseline pb-2'>
            <h1 className='font-bold px-12 mt-4 text-[#e6e6e6] text-2xl'>All Products</h1>
            <div className='flex flex-wrap justify-center gap-2 mx-2 mt-4'>
            {
                state.list.map((product) => <Card key={product.id} name={product.title} price = {product.price} img = {product.image}/>)
            }
            </div>
        </div>

    </div>
  )
}

export default AllProducts