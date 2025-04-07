import React from 'react';
import { productCategories } from '../data/Data';
import { Link } from 'react-router-dom';

const Smartphones = () => {
    return (
        <div className='product-container'>
            {productCategories
                .filter(category => category.category === 'Smartphones')
                .map((categoryData, index) => (
                    <div key={index} className='flex flex-col gap-3'>
                        <h1 className='text-2xl md:text-4xl font-semibold'>{categoryData.category}</h1>
                        <p className='text-sm md:text-lg text-gray-700'>{categoryData.description}</p>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-center'>
                            {categoryData.items.slice(0, 10).map((item, idx) => (
                                <Link
                                    to='/'
                                    key={idx}
                                    className='bg-gray-100 border border-gray-300 rounded-lg p-2 md:p-4 flex flex-col items-center'
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='h-40 object-cover rounded-md mb-2'
                                    />
                                    <h2 className='text-xl font-semibold'>{item.name}</h2>
                                    <p className='text-gray-600 text-sm'>{item.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Smartphones;