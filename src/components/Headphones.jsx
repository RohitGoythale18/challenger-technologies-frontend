import React from 'react';
import PTronNeckband from '../assets/PTronNeckband.png';
import NoiseAirBudsMini from '../assets/NoiseAirBudsMini.png';
import RealmeBudsAir6 from '../assets/RealmeBudsAir6.png';
import OnePlusNordBuds3Pro  from '../assets/OnePlusNordBuds3Pro.png';
import { Link } from 'react-router-dom';

const headphonesData = [
    { name: 'PTron Neckband', image: PTronNeckband, description: 'pTron Tangent Lite Bluetooth 5.0 Wireless Headphones with Hi-Fi Stereo Sound (Black)' },
    { name: 'Noise Air Buds Mini', image: NoiseAirBudsMini, description: 'Truely Wireless Earbuds' },
    { name: 'Realme Buds Air 6', image: RealmeBudsAir6, description: 'Realme Buds Air 6 Earbuds ( Forest Green )' },
    { name: 'OnePlus Nord Buds 3 Pro', image: OnePlusNordBuds3Pro, description: 'OnePlus Nord Buds 3 Pro Truly Wireless Bluetooth Earbuds (Black)' },
];

const Headphones = () => {
    return (
        <div className='flex flex-col gap-3 px-10 py-10'>
            <h1 className='text-4xl font-semibold'>Headphones</h1>
            <p className='text-lg'>Explore our range of headphones from various brands.</p>
            <div className='grid grid-cols-4 gap-4 text-center'>
                {headphonesData.map((headphone, index) => (
                    <Link to='/' key={index} className='bg-gray-100 border border-gray-300 rounded-lg p-4 flex flex-col items-center'>
                        <img src={headphone.image} alt={headphone.name} className='h-40 object-cover rounded-md mb-2' />
                        <h2 className='text-xl font-semibold'>{headphone.name}</h2>
                        <p className='text-gray-600'>{headphone.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Headphones;