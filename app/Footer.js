import React from 'react'

function Footer() {
  return (
    <div>
<div className=' sm:grid sm:grid-cols-1 sm:gap-y-6 md:grid md:grid-cols-[2fr_1fr_1fr] md:gap-10  p-20 capitalize'>
<div className='col-1'>
 <div className="logo font-bold capitalize text-2xl">
        <h1>
          <span className="text-orange-700">q</span>uic
          <span className="uppercase">c</span>art
        </h1>
      </div>

      <div className='text'>
        <p className='text-sm mt-6 mb-2'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.

</p>

      </div>


 </div>

<div className='col-2'>

    <h1 className='sm:mb-2 font-bold text-sm capitalize md:mb-6'>Company</h1>
    <ul>
        <li>home</li>
        <li>about us</li>
        <li>contact us</li>
        <li> privacy policy</li>
    </ul>

</div>

<div className='col-3'>
    <h1 className=' sm:mb-3 font-bold text-sm capitalize md:mb-6'>get in touch</h1>
    <ul>
        <li>+234 5546 6456</li>
        <li>contact@clrckstac.dev</li>
    </ul>

</div>
   
</div>
   <div className='h-[1px] w-full bg-gray-300 '></div>


<p className='text-center capitalize font-semibold text-sm pt-2'>   © 2025 quickcart. All rights reserved.</p>

    </div>
  )
}

export default Footer