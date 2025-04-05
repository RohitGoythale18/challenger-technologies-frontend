import React from 'react';
import Hero1 from '../assets/Hero1.png';

const heroInfo = {
  specialOffer: "Special Offers",
  title: "Refurbished iPhones",
  description: "Smooth, Responsive Super Retina XDR Display with ProMotion",
  buttonText: "Shop Now",
};

const Hero = () => {
  return (
    <div className='flex justify-between items-center gap-10 py-20 px-40'>
      <div className='pr-36'>
        <p className='inline-block bg-green-600 text-white text-sm rounded-full px-2'>{heroInfo.specialOffer}</p>
        <h1 className='text-5xl font-semibold my-6'>{heroInfo.title}</h1>
        <p className='text-lg'>{heroInfo.description}</p>
        <button className='bg-blue-500 text-white px-4 py-2 my-5 rounded'>{heroInfo.buttonText}</button>
      </div>
      <div>
        <img src={Hero1} alt="Hero-Image" className='h-[60vh]' />
      </div>
    </div>
  )
}

export default Hero;