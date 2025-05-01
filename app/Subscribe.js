'use client'
import React, { useState } from 'react'


function Subscribe() {
    const [email,setemail]= useState("")
  return (
    <div className='flex justify-center flex-col items-center mb-5 px-5 '>
      <div className='mb-3 flex flex-col items-center j'>
      <h1 className='text-center sm:text-xl  md:text-2xl font-bold'>Subscribe now &get 20% off</h1>
      <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
      </div>
      <form className='flex items-center' onSubmit={(e)=>{e.preventDefault()}}>
        <input placeholder='enter your email id' className=' sm: w-[200px ] md:w-[400px] h-10 outline-0  capitalize border border-gray-400 p-1' onChange={(e)=>{setemail(e.target.value)}}/>
        <button className='bg-orange-500 text-white h-10 w-[100px] cursor-pointer'>subscribe</button>
      </form>
        
    </div>
  )
}

export default Subscribe