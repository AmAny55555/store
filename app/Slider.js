import React from 'react'


function Slider(props) {
  return (
<div className="bg-gray-300 w-full md:w-[90%] mx-auto flex flex-col md:flex-row gap-10 justify-center px-5 md:px-10 py-10 mt-10">


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