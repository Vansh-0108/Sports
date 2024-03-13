import React, { useEffect, useState } from 'react'
import Filter from '../Cards/Filter';
import Card from '../Cards/Card';

function AllProducts() {

    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
        setProducts(data);
    }

    useEffect(() => {
        getAllProducts();
    }, [])

  return (
      <div className='min-h-screen bg-[#e6e6e6]'>
        <Filter />
        {/* <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 rale-font" >Our Latest Collection</h1>
                    <div className="h-1 w-20 gold-primary rounded"></div>
                </div>
            </div>
        </section > */}

        <div className='bg-[#16292c] mx-4 mt-4 rounded-lg flex flex-col items-baseline pb-2'>
            <h1 className='font-bold px-12 mt-4 text-[#e6e6e6] text-2xl'>All Products</h1>
            <div className='flex flex-wrap justify-center gap-2 mx-2 mt-4'>
            {
                products.map((product) => <Card key={product.id} name={product.title} price = {product.price} img = {product.image}/>)
            }
            </div>
        </div>

    </div>
  )
}

export default AllProducts