import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

const SearchBar = () => {
  return (
    <>
      {/* Desktop Search Bar */}
      <div className='hidden md:flex border border-gray-400 justify-between items-center'>
        <span className='border-r border-r-gray-400 text-sm p-1 flex items-center gap-2'>
          <p>All Categories</p>
          <FaAngleDown className='size-4' />
        </span>
        <input
          type="search"
          placeholder='Search products...'
          className='text-sm p-1 pl-3 w-[20vw] outline-none'
        />
        <button className='border-l border-l-gray-400'>
          <IoIosSearch className='size-7 p-1' />
        </button>
      </div>

      {/* Mobile Search Bar */}
      <div className='flex md:hidden border border-gray-400 flex-col items-stretch w-full z-30 relative bg-white'>
        <span className='border-b border-gray-400 text-sm py-2 px-3 flex justify-between items-center gap-2'>
          <p>All Categories</p>
          <FaAngleDown className='size-4' />
        </span>

        <div className='flex items-center w-full'>
          <input
            type="search"
            placeholder='Search products...'
            className='text-sm px-3 py-2 w-full outline-none'
          />
          <button className='border-l border-gray-400 px-3 py-2'>
            <IoIosSearch className='size-6' />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
