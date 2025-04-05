import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className='bg-gray-800 text-white py-10'>
                <div className='container mx-auto text-center'>
                    <p className='text-xl'>&copy;2025 GetTech. All rights reserved.</p>
                    <div className='flex flex-col gap-2 mt-2'>
                        <p>Follow us on</p>
                        <div className='flex justify-center items-center space-x-4'>
                            <Link to='/' className='text-gray-400 hover:text-white'><FaFacebook /></Link>
                            <Link to='/' className='text-gray-400 hover:text-white'><FaInstagram /></Link>
                            <Link to='/' className='text-gray-400 hover:text-white'><TbWorld /></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;