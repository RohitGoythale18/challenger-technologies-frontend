import React from 'react';
import SearchBar from './SearchBar';
import { FaRegHeart, FaRegUser, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='flex items-center justify-between py-4 px-10 shadow-md'>
            <div>
                <h2 className='text-3xl font-semibold italic'>GetTech</h2>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className='border border-black flex items-center gap-5 py-2 px-5 rounded-full'>
                <FaRegHeart />
                <FaRegUser />
                <FaShoppingCart />
            </div>
        </div>
    )
}

export default Header;