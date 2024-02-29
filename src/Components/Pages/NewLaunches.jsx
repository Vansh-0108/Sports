import React from 'react'
import Card from '../Cards/Card'

function NewLaunches() {

  const items = [
    {
      name: 'BasketBall',
      price: '350',
      img: 'https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'BasketBall',
      price: '350',
      img: 'https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'BasketBall',
      price: '350',
      img: 'https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'BasketBall',
      price: '350',
      img: 'https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'BasketBall',
      price: '350',
      img: 'https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'BasketBall',
      price: '350',
      img: 'https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'BasketBall',
      price: '350',
      img: 'https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ]

  return (
    <div className='min-h-screen flex flex-col items-center bg-[#16292c]'>
        <h1 className='text-7xl m-2 py-8 text-[#e6e6e6] font-bold text-center'>New Launches</h1>
        <hr className='border-2 border-[#e6e6e6] w-[60%]'/>
        <div className='flex flex-wrap justify-center items-center gap-2 mx-2 my-6'>
          {
            items.map((item, key) => <Card key={key} name={item.name} price = {item.price} img = {item.img} />)
          }
        </div>
    </div>
  )
}

export default NewLaunches