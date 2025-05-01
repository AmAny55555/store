import React from 'react'


function Slider(props) {
  return (
<div className='bg-gray-300 flex items-center flex-col gap-20 mt-0 md:mt-5 md:flex-row md:gap-50 w-full md:w-[90%] p-15 md:mx-20'>

<div className='col-1 w-full md:w-1/2'> 
    
<h1 className='text-orange-700 capitalize  font-semibold text-sm  mb-3 '>{props.text}</h1>
<h1 className='font-bold text-3xl capitalize '>{props.text2}</h1>

<div className='flex items-center gap-10'>
<button className='bg-orange-600 rounded-2xl p-1 text-white w-28 mt-5'>{props.btn}</button>


</div>
</div>

<div className='col-2 w-full   md:w-1/2'>
    <img src={props.src} className=''/>
 

</div>


    </div>
  )
}

export default Slider