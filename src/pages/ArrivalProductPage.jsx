import { useState } from 'react';
import Products_1 from './Products_1';
import { products } from '../data/products';

const ArrivalProductPage = () => {

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const uniqueCategories = Array.from(new Set(products.flatMap(product => product.categories)));

    const uniqueColors = Array.from(new Set(products.flatMap(product => product.colors.map(color => color.hex))));

    const handleFilter = (category) => {
        setSelectedCategory(category);

        let updatedProducts = products;


        if (category) {
            updatedProducts = updatedProducts.filter(product => product.categories.includes(category));
        }

        console.log(category);


        setFilteredProducts(updatedProducts);
    };

    handleFilter

    return (
        <div className='flex justify-center w-full gap-6 container mx-auto px-2 mb-8 sm:mb-12 md:mb-24'>
            <div className='hidden lg:block'>
                <div className='w-56'>
                    <h3 className='text-[#191919] text-lg font-semibold mb-3 uppercase'>Categories</h3>
                    <ul>
                        {uniqueCategories.map((category, index) => (
                            <li
                                key={index}
                                onClick={() => handleFilter(category)}
                                className={`text-base text-[#888888] hover:text-teal-600 mb-1 cursor-pointer duration-300 ${selectedCategory === category ? 'font-bold text-teal-600 duration-0' : ''}`}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                    <h3 className='text-[#191919] text-lg font-semibold my-3 uppercase'>Colors</h3>
                    <ul className='grid grid-cols-6'>
                        {uniqueColors.map((color, index) => (
                            <li
                                key={index}
                                onClick={() => handleFilter(color)}
                                style={{
                                    backgroundColor: color,
                                }}
                                className={` hover:text-teal-600 mb-1 w-6 h-6 rounded-full cursor-pointer duration-300 border-[3px]`}
                            >

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex-1'>
                <Products_1 selectedCategory={filteredProducts} />
            </div>
        </div>
    );
};

export default ArrivalProductPage;
