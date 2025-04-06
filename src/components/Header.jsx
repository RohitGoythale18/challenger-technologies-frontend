import { useState } from 'react';
import { FaRegHeart, FaRegUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className='w-full flex items-center justify-between py-2 md:py-4 px-6 md:px-10 shadow-md relative'>
            <h2 className='text-2xl md:text-3xl font-semibold italic'>GetTech</h2>

            <div className='hidden md:block w-full max-w-md mx-4'>
                <SearchBar />
            </div>

            <div className='hidden md:flex items-center gap-5 py-2 px-5 border border-black rounded-full'>
                <FaRegHeart />
                <FaRegUser />
                <FaShoppingCart />
            </div>

            {/* Mobile Icons */}
            <div className='flex md:hidden items-center gap-4 relative'>
                <button onClick={() => {
                    setShowSearch(!showSearch);
                    setShowSidebar(false);
                }}>
                    <FaSearch size={20} />
                </button>

                <button onClick={() => {
                    setShowUserMenu(!showUserMenu);
                    setShowSearch(false);
                    setShowSidebar(false);
                }}>
                    <FaRegUser size={20} />
                </button>

                <button onClick={() => {
                    setShowSidebar(!showSidebar);
                    setShowSearch(false);
                }}>
                    <FiMenu size={22} />
                </button>
            </div>

            {/* Mobile SearchBar */}
            {showSearch && (
                <div className='absolute top-12 left-0 w-full md:hidden z-40'>
                    <SearchBar />
                </div>
            )}

            {/* Mobile User Menu */}
            {showUserMenu && (
                <div className='absolute top-10 right-0 bg-white shadow-md p-4 rounded-lg flex gap-6 text-xl z-50'>
                    <FaRegHeart />
                    <FaShoppingCart />
                    <FaRegUser />
                </div>
            )}

            {/* Sidebar */}
            <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />
        </div>
    );
};

export default Header;
