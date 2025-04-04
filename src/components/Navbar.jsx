import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-blue-500 text-white py-4 px-20 flex items-center gap-10'>
        <Link>Deals</Link>
        <Link>Home</Link>
        <Link>iPhones</Link>
        <Link>Samsung</Link>
        <Link>iPads</Link>
        <Link>Computers</Link>
        <Link>Clearance</Link>
        <Link>Sell</Link>
        <Link>Contact Us</Link>
    </nav>
  )
}

export default Navbar;