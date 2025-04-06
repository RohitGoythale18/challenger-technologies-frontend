import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Deals', path: '/deals' },
  { name: 'Home', path: '/' },
  { name: 'Smartphones', path: '/smartphones' },
  { name: 'Computers', path: '/computers' },
  { name: 'Clearance', path: '/clearance' },
  { name: 'Sell', path: '/sell' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {

  return (
    <nav className='hidden md:flex bg-blue-500 text-white py-4 px-6 md:px-20 items-center gap-6 md:gap-10'>
      {navLinks.map((link, index) => (
        <Link key={index} to={link.path}>
          {link.name}
        </Link>
      ))}
    </nav>

  )
}

export default Navbar;