import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

const SearchBar = () => {
  return (
    <div className='border border-gray-400 flex items-center'>
      <span className='border border-r-gray-400 p-2 flex items-center gap-4'>
        All Categories
        <FaAngleDown className='size-4' />
      </span>
      <input type="search" placeholder='Search products...' className='p-2 pl-3 w-[30vw] outline-none' />
      <button className='border border-l-gray-400'>
        <IoIosSearch className='size-10 p-2' />
      </button>
    </div>
  )
}

export default SearchBar;