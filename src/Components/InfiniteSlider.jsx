import React from 'react'

function InfiniteSlider() {
  return (
    <div className="relative flex overflow-x-hidden bg-gray-400 z-0">
        <div className="py-1 animate-marquee whitespace-nowrap capitalize">
            <span className="text-xl mx-4">Buy now the finest sport equipments at the best deals</span>
            <span className="text-xl mx-4">Buy now the finest sport equipments at the best deals</span>
            <span className="text-xl mx-4">Buy now the finest sport equipments at the best deals</span>
            <span className="text-xl mx-4">Buy now the finest sport equipments at the best deals</span>
            <span className="text-xl mx-4">Buy now the finest sport equipments at the best deals</span>
        </div>

        <div className="absolute top-0 py-1 animate-marquee2 whitespace-nowrap capitalize ">
            <span className="text-xl mx-4">Buy now the finest sport equipments at the best deals</span>
            <span className="text-xl mx-4">Buy now the finest sport equipments at the best deals</span>
            <span className="text-xl mx-4">Buy now the finest sport equipments at the best deals</span>
            <span className="text-xl mx-4">Buy now the finest sport equipments at the best deals</span>
            <span className="text-xl mx-4">Buy now the finest sport equipments at the best deals</span>
        </div>
    </div>
  )
}

export default InfiniteSlider