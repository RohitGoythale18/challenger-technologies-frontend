import React from 'react';
import { BsUsbDrive } from 'react-icons/bs';
import { CiHeadphones, CiKeyboard, CiLaptop, CiMobile3 } from 'react-icons/ci';
import { FaComputer } from 'react-icons/fa6';
import { RiComputerLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const accessoriesData = [
    { name: 'Headphones', icon: <CiHeadphones className='accessories-icons' />, path: '/headphones' },
    { name: 'iPhone', icon: <CiMobile3 className='accessories-icons' />, path: '/iphone' },
    { name: 'Keyboards', icon: <CiKeyboard className='accessories-icons' />, path: '/keyboards' },
    { name: 'Laptops', icon: <CiLaptop className='accessories-icons' />, path: '/laptops' },
    { name: 'Monitors', icon: <RiComputerLine className='accessories-icons' />, path: '/monitors' },
    { name: 'Desktops', icon: <FaComputer className='accessories-icons' />, path: '/desktops' },
    { name: 'Pendrives', icon: <BsUsbDrive className='accessories-icons' />, path: '/pendrives' },
];

const Accessories = () => {
    return (
        <div className='flex justify-between gap-4 py-4 px-20'>
            {accessoriesData.map((item, index) => (
                <Link
                    key={index}
                    to={item.path}
                    className='border border-gray-400 rounded-md flex items-center gap-2 py-2 px-3'
                >
                    {item.icon}
                    <p>{item.name}</p>
                </Link>
            ))}
        </div>
    )
}

export default Accessories;