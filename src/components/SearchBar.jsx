import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

const SearchBar = () => {
  return (
    <div className='border border-gray-400 flex items-center'>
      <span className='border border-r-gray-400 text-sm py-1 px-2 flex justify-center items-center gap-2'>
        <p>All Categories</p>
        <FaAngleDown className='size-4' />
      </span>
      <input type="search" placeholder='Search products...' className='text-sm p-1 pl-3 w-[30vw] outline-none' />
      <button className='border border-l-gray-400'>
        <IoIosSearch className='size-7 p-1' />
      </button>
    </div>
  )
}

export default SearchBar;