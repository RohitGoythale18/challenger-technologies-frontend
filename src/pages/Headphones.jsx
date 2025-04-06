import React from 'react';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/Data';

const Headphones = () => {
    return (
        <div className='px-10 py-10 flex flex-col gap-10'>
            {productCategories
                .filter(category => category.category === 'Headphones')
                .map((categoryData, index) => (
                    <div key={index} className='flex flex-col gap-3'>
                        <h1 className='text-4xl font-semibold'>{categoryData.category}</h1>
                        <p className='text-lg'>{categoryData.description}</p>
                        <div className='grid grid-cols-4 gap-4 text-center'>
                            {categoryData.items.slice(0, 10).map((item, idx) => (
                                <Link
                                    to='/'
                                    key={idx}
                                    className='bg-gray-100 border border-gray-300 rounded-lg p-4 flex flex-col items-center'
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='h-40 object-cover rounded-md mb-2'
                                    />
                                    <h2 className='text-xl font-semibold'>{item.name}</h2>
                                    <p className='text-gray-600'>{item.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Headphones;