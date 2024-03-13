import React, { useEffect, useState } from 'react'
import Card from '../Cards/Card'

function NewLaunches() {

  const [items, setItems] = useState([])

  const getProductDetails = async (id) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
    
    const item = {
      name: data.title,
      price: data.price,
      img: data.image,
    } 

    setItems((prev) => [...prev, item]);
  }

  const getFiveProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=5&sort=desc")
      .then((res) => res.json())

    setItems(data)
  }

  useEffect(() => {
    // getProductDetails(1)
   getFiveProducts();
  }, [])

  return (
    <div className='min-h-screen flex flex-col items-center bg-[#16292c]'>
        <h1 className='text-7xl m-2 py-8 text-[#e6e6e6] font-bold text-center'>New Launches</h1>
        <hr className='border-2 border-[#e6e6e6] w-[60%]'/>
        <div className='flex flex-wrap justify-center  gap-2 mx-2 my-6'>
          {
            // items.map((item, key) => <Card key={key} name={item.name} price = {item.price} img = {item.img} />)
            items.map((item) => <Card key={item.id} name={item.title} price = {item.price} img = {item.image} />)
            // items.map((item, key) => <li key = {key}>item.title</li>)
          }

        </div>
    </div>
  )
}

export default NewLaunches