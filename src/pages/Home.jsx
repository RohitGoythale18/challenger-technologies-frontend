import React from 'react';
import Hero from '../components/Hero';
import Smartphones from '../components/Smartphones';
import Headphones from '../components/Headphones';

const Home = () => {
  return (
    <div>
      <Hero />
      <Smartphones />
      <Headphones />
    </div>
  )
}

export default Home;