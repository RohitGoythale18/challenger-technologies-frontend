import React from 'react';
import OnePlusNord2 from '../assets/OnePlusNord2.png';
import Realme9Pro from '../assets/Realme9Pro.png';
import OppoA16K from '../assets/OppoA16K.png';
import SamsungS20FE from '../assets/SamsungS20FE.png';
import { Link } from 'react-router-dom';

const smartphonesData = [
    { name: 'OnePlus Nord 2', image: OnePlusNord2, description: 'OnePlus Nord 2 (12gb + 256gb)' },
    { name: 'Realme 9 Pro Plus 5G', image: Realme9Pro, description: 'OnePlus Nord 2 (8gb + 128gb)' },
    { name: 'OPPO A16K', image: OppoA16K, description: 'Oppo A16K (3gb + 32gb)' },
    { name: 'Samsung S20 FE', image: SamsungS20FE, description: 'Samsung S20 FE (8gb + 128gb)' },
];

const Smartphones = () => {
    return (
        <div className='flex flex-col gap-3 px-10 py-10'>
            <h1 className='text-4xl font-semibold'>Smartphones</h1>
            <p className='text-lg'>Explore our range of smartphones from various brands.</p>
            <div className='grid grid-cols-4 gap-4 text-center'>
                {smartphonesData.map((smartphone, index) => (
                    <Link to='/' key={index} className='bg-gray-100 border border-gray-300 rounded-lg p-4 flex flex-col items-center'>
                        <img src={smartphone.image} alt={smartphone.name} className='h-40 object-cover rounded-md mb-2' />
                        <h2 className='text-xl font-semibold'>{smartphone.name}</h2>
                        <p className='text-gray-600'>{smartphone.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Smartphones;