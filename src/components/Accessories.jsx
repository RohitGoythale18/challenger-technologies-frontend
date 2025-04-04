import React from 'react';
import { BsUsbDrive } from 'react-icons/bs';
import { CiHeadphones, CiKeyboard, CiLaptop, CiMobile3 } from 'react-icons/ci';
import { FaComputer } from 'react-icons/fa6';
import { RiComputerLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Accessories = () => {
    return (
        <div className='flex justify-between gap-4 py-4 px-20'>
            <Link className='border border-gray-400 rounded-md flex items-center gap-2 py-2 px-3'>
                <CiHeadphones className='size-7 bg-gray-300 rounded-full p-1' />
                <p>Headphones</p>
            </Link>
            <Link className='border border-gray-400 rounded-md flex items-center gap-2 py-2 px-3'>
                <CiMobile3 className='size-7 bg-gray-300 rounded-full p-1' />
                <p>iPhone</p>
            </Link>
            <Link className='border border-gray-400 rounded-md flex items-center gap-2 py-2 px-3'>
                <CiKeyboard className='size-7 bg-gray-300 rounded-full p-1' />
                <p>Keyboards</p>
            </Link>
            <Link className='border border-gray-400 rounded-md flex items-center gap-2 py-2 px-3'>
                <CiLaptop className='size-7 bg-gray-300 rounded-full p-1' />
                <p>Laptops</p>
            </Link>
            <Link className='border border-gray-400 rounded-md flex items-center gap-2 py-2 px-3'>
                <RiComputerLine className='size-7 bg-gray-300 rounded-full p-1' />
                <p>Monitors</p>
            </Link>
            <Link className='border border-gray-400 rounded-md flex items-center gap-2 py-2 px-3'>
                <FaComputer className='size-7 bg-gray-300 rounded-full p-1' />
                <p>Desktops</p>
            </Link>
            <Link className='border border-gray-400 rounded-md flex items-center gap-2 py-2 px-3'>
                <BsUsbDrive className='size-7 bg-gray-300 rounded-full p-1' />
                <p>Pendrives</p>
            </Link>
        </div>
    )
}

export default Accessories;