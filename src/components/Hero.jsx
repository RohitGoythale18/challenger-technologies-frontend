import React from 'react';
import Hero1 from '../assets/Hero1.png';
import HeroBgImage from '../assets/HeroBgImage.png';
import HomeBanner from '../assets/HomeBanner.png';

const heroInfo = {
  specialOffer: "Special Offers",
  title: "Refurbished iPhones",
  description: "Smooth, Responsive Super Retina XDR Display with ProMotion",
  buttonText: "Shop Now",
};

const Hero = () => {
  return (
    <>
      {/* Desktop View */}
      <div
        className='hidden md:flex justify-between items-center gap-10 py-20 px-10 lg:px-40 bg-gray-100 bg-cover bg-center'
        style={{ backgroundImage: `url(${HeroBgImage})` }}
      >
        <div className='pr-10 lg:pr-36'>
          <p className='inline-block bg-green-600 text-white text-sm rounded-full px-2'>{heroInfo.specialOffer}</p>
          <h1 className='text-4xl lg:text-5xl font-semibold my-6'>{heroInfo.title}</h1>
          <p className='text-base lg:text-lg'>{heroInfo.description}</p>
          <button className='bg-blue-500 text-white px-4 py-2 my-5 rounded'>{heroInfo.buttonText}</button>
        </div>
        <div>
          <img src={Hero1} alt="Hero-Image" className='h-[40vh] lg:h-[60vh] object-contain' />
        </div>
      </div>

      {/* Mobile View: Image */}
      <div className='md:hidden'>
        <img
          src={HomeBanner}
          alt="Mobile Hero Banner"
          className='w-full h-auto object-cover'
        />
      </div>
    </>
  );
};

export default Hero;
