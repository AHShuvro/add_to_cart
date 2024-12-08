import { useState } from 'react';
import { blogInfo } from '../data/products';

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const categories = ['All', ...new Set(blogInfo.map(item => item.category))];


    const filteredBlogs = selectedCategory === 'All'
        ? blogInfo
        : blogInfo.filter(item => item.category === selectedCategory);

    return (
        <div className='flex justify-center w-full gap-6 container mx-auto px-2 mb-8 sm:mb-12 md:mb-24'>
            {/* Sidebar */}
            <div className='hidden lg:block'>
                <div className='w-56'>
                    <h3 className='text-[#191919] text-lg font-semibold mb-3 uppercase'>Categories</h3>
                    <ul>
                        {categories.map((category, idx) => (
                            <li
                                key={idx}
                                className={`text-base text-[#888888] hover:text-teal-600 mb-1 cursor-pointer duration-300 ${
                                    selectedCategory === category ? 'text-teal-600 font-bold' : ''
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Blog Items */}
            <div className='flex-1'>
                <div className='bg-white shadow-sm rounded-xl grid grid-cols-2 gap-4'>
                    {filteredBlogs.map((item, idx) => (
                        <div key={idx} className='group relative p-4 bg-white'>
                            <div className="overflow-hidden relative">
                                <div className="pointer-events-none">
                                    <img
                                        className='duration-1000 max-h-96 w-full group-hover:transform group-hover:scale-105 inset-0'
                                        src={item.img1}
                                        alt={`${item.name} image`}
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col items-start gap-2">
                                <p className="font-semibold text-sm text-white px-2 py-1 bg-teal-600 rounded-sm cursor-pointer">
                                    {item.name}
                                </p>
                                <p className="font-semibold text-2xl text-[#222222] cursor-pointer hover:text-teal-600 duration-300">
                                    {item.title}
                                </p>
                                <p className="text-[#333333] text-lg">{item.description}</p>
                                <p className="font-semibold text-sm text-teal-600">{item.author}</p>
                                <p className="font-bold text-lg hover:text-teal-600 duration-300 cursor-pointer">Read more</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
