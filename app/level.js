import React from 'react'
import Image from 'next/image'
import Buy from './Buy'
function Level() {
  return (
    <div className='bg-gray-300 flex flex-col items-center justify-center md:flex-row md:justify-between p-10 w-[85%] mx-auto mb-10'>
     <div className='img w-[200px] h-[250px] '>
     <Image src={'/ppp.jpeg'}  width={50} height={50} alt='img' className='w-full h-full object-contain'/>
     </div>
     <div className=' flex flex-col items-center capitalize text-center '>

        <h1 className='text-3xl font-bold mb-2'>level up your <br></br>gaming experience</h1>
        <p className='mb-2 text-sm text-gray-500'>from immersive sound to prieces controls <br></br>everything you nedd to win</p>
        <Buy/>
     </div>


     <div className='img w-[200px] h-[250px]'>
     <Image src={'/pp.png'}  width={50} height={50} alt='img'  className='w-full h-full object-contain'/>
     </div>

    </div>
  )
}

export default Level