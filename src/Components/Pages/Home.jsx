import React from 'react'
import bgImage from '../../assets/Bg.jpg'
import InfiniteSlider from '../InfiniteSlider'
import About from './About'
import NewLaunches from '../NewLaunches'

function Home() {
  return (
    <>
        <div className="flex min-h-screen items-center bg-cover bg-[url('https://img.freepik.com/free-photo/front-view-male-rugby-player-holding-ball-hip-with-copy-space_23-2148793355.jpg?w=996&t=st=1709036061~exp=1709036661~hmac=e196bdfbe03e84a2b3f1539a6dca2a2cfbb0f3b30f924608ff449624aa06b12f')] align-center overflow-hidden">
            {/* <img src={bgImage} alt="" /> */}
            <div className='text-white text-4xl w-[50%] p-4'>
                <h1 className='capitalize'>Get the best of all the brands </h1>
                <hr className='mt-3 mb-1 w-[70%] border-[#e6e6e6] border-[1.75px] rounded-full'/>
                <span className='uppercase text-7xl font-bold text-[#D3AD7F]'>Under One Roof</span>
                <hr className='mt-3 mb-1 w-[85%] border-[#e6e6e6] border-[1.75px] rounded-full'/>
            </div>
        </div>
        
        <InfiniteSlider />
        <About />
        <NewLaunches />
    </>


  )
}

export default Home