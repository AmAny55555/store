import React from 'react'
import Featuredcompnent from './Featuredcompnent'

function Featured() {
  return (
    <div className='w-[85%] mx-auto '>
    <div className='relative flex items-center justify-center '>
    <h1 className='text-2xl capitalize font-medium'>Featured products</h1>
    <h1 className='absolute w-[130px] top-9 h-[3px] bg-amber-800'></h1>
    </div>
    <div className='grid grid-cols-1 gap-5 items-center justify-items-center md:grid-cols-3  lg:grid-cols-3 lg:gap-16 mt-6 mb-6'>
    <Featuredcompnent img="gg.jpeg" text1="unparalleled sound" text2="experince crystal-clear audio with premium headphone."/>
    <Featuredcompnent img="ear.jpeg" text1="stay connected" text2="compact and stylish ear phone for every occasion"/>
    <Featuredcompnent img="man.jpeg" text1="power in every pixel"  text2="shop the latest laptops for work gaming and more"/>
    </div>
    </div>
  )
}

export default Featured