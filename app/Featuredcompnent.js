import React from 'react'
import Buy from './Buy'

function Featuredcompnent(props) {
  return (
    <div className='relative'>
      <div className='w-[300px] h-[300px] '>
      <img src={props.img}  className='w-full h-full  object-cover'/>
      </div>
      <div className='text absolute bottom-5 left-3 text-white capitalize'>
        <h1 className='font-bold mb-2 '>{props.text1}</h1>
        <h1 className='text-sm w-[200px]'>{props.text2}</h1>
        <Buy/>

      </div>

    </div>
  )
}

export default Featuredcompnent