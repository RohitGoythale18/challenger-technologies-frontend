import React from 'react';
import { FaRegHeart, FaRegUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-between items-center p-4">
                <h2 className='text-2xl md:text-3xl font-semibold italic'>GetTech</h2>
                <button onClick={onClose} className="text-xl font-bold">✕</button>
            </div>
            <div className="flex flex-col gap-6 p-6 text-lg">
                <Link to="/deals" onClick={onClose}>Deals</Link>
                <Link to="/" onClick={onClose}>Home</Link>
                <Link to="/smartphones" onClick={onClose}>Smartphones</Link>
                <Link to="/computers" onClick={onClose}>Computers</Link>
                <Link to="/clearance" onClick={onClose}>Clearance</Link>
                <Link to="/sell" onClick={onClose}>Sell</Link>
                <Link to="/contact" onClick={onClose}>Contact Us</Link>
            </div>
        </div>
    );
};

export default Sidebar;
