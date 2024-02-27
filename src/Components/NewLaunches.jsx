import React from 'react'
import Card from './Cards/Card'

function NewLaunches() {
  return (
    <div className='flex flex-col items-center bg-[#16292c]'>
        <h1 className='text-7xl m-2 py-8 text-[#e6e6e6] font-bold'>New Launches</h1>
        <hr className='border-2 border-[#e6e6e6] w-[60%]'/>
        <div className='flex mx-2 my-6'>
            <Card name='BasketBall' price = '20' />
            <Card name='BasketBall' price = '20' />
            <Card name='BasketBall' price = '20' />
            <Card name='BasketBall' price = '20' />
            <Card name='BasketBall' price = '20' />
        </div>
    </div>
  )
}

export default NewLaunches