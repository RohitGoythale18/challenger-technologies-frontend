import React from 'react';
import { BsUsbDrive } from 'react-icons/bs';
import { CiHeadphones, CiKeyboard, CiLaptop, CiMobile3 } from 'react-icons/ci';
import { FaComputer } from 'react-icons/fa6';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const accessoriesData = [
    { name: 'Headphones', icon: <CiHeadphones className='accessories-icons' />, path: '/headphones' },
    { name: 'iPhone', icon: <CiMobile3 className='accessories-icons' />, path: '/iphones' },
    { name: 'Keyboards', icon: <CiKeyboard className='accessories-icons' />, path: '/keyboards' },
    { name: 'Laptops', icon: <CiLaptop className='accessories-icons' />, path: '/laptops' },
    { name: 'Monitors', icon: <RiComputerLine className='accessories-icons' />, path: '/monitors' },
    { name: 'Desktops', icon: <FaComputer className='accessories-icons' />, path: '/desktops' },
    { name: 'Pendrives', icon: <BsUsbDrive className='accessories-icons' />, path: '/pendrives' },
];

const Accessories = () => {
    return (
        <div className='flex items-center z-10 relative bg-white'>
            <MdKeyboardArrowLeft className='md:hidden size-12' />

            <div className='flex justify-between gap-4 md:gap-10 py-2 md:py-4 md:px-20 overflow-auto'>
                {accessoriesData.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className='border border-gray-400 rounded-md text-sm md:text-base flex items-center gap-2 py-1 px-1 md:py-2 md:px-3'
                    >
                        {item.icon}
                        <p>{item.name}</p>
                    </Link>
                ))}
            </div>

            <MdKeyboardArrowRight className='md:hidden size-12' />
        </div>
    )
}

export default Accessories;