import React from 'react';
import Hero1 from '../assets/Hero1.png';

const Hero = () => {
  return (
    <div className='flex justify-between items-center gap-10 py-20 px-40'>
      <div className='pr-36'>
        <p className='inline-block bg-green-600 text-white text-sm rounded-full px-2'>Special Offers</p>
        <h1 className='text-5xl font-semibold my-6'>Refurbished iPhones</h1>
        <p className='text-lg'>Smooth, Resposive Super Ratina XDR Display with ProMotion</p>
        <button className='bg-blue-500 text-white px-4 py-2 my-5 rounded'>Shop Now</button>
      </div>
      <div>
        <img src={Hero1} alt="Hero-Image" className='h-[60vh]' />
      </div>
    </div>
  )
}

export default Hero;