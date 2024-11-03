import React from 'react';

const College_1 = () => {
    return (
        <div className=' px-16'>
            <div className="grid grid-cols-2 gap-4 h-screen p-4">

                <div className="flex flex-col gap-4 h-full bg-gray-100 rounded-lg overflow-hidden">

                    <div className="cursor-pointer relative h-3/5 bg-teal-500 flex items-center justify-center text-white overflow-hidden">
                        <img className='w-full h-full hover:transform hover:scale-105 hover:inset-0 duration-300' src="24_1.webp" alt="" />
                        <div className='absolute top-16 left-16 text-black flex flex-col gap-4 items-start'>
                            <p className='text-teal-600 font-medium uppercase '>Mid-season</p>
                            <h4 className='text-4xl font-semibold text-[#222222]'>Hodies For Her</h4>
                            <p className='text-[#222222]'>Available online and in-store</p>
                            <button className='underline text-[#444444] hover:text-teal-600 text-lg font-medium'>Shop now</button>
                        </div>
                    </div>

                    <div className="relative cursor-pointer h-2/5 bg-teal-700 flex items-center justify-center text-white overflow-hidden">
                        <img className='w-full h-full hover:transform hover:scale-105 hover:inset-0 duration-300' src="24_2.webp" alt="" />
                        <div className='absolute top-16 left-16 text-black flex flex-col gap-4 items-start'>
                            <p className=' font-medium uppercase text-teal-600 '>Top trending</p>
                            <h4 className='text-4xl font-semibold text-[#222222] '>Succulent Metal <br />Upto 30%</h4>
                            <button className='underline text-[#222222] hover:text-teal-600 text-lg font-medium'>Shop now</button>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-4 h-full bg-gray-100 rounded-lg overflow-hidden">

                    <div className="relative cursor-pointer h-2/5 bg-teal-500 flex items-center justify-center text-white overflow-hidden">
                        <img className='w-full h-full hover:transform hover:scale-105 hover:inset-0 duration-300' src="24_3.webp" alt="" />
                        <div className='absolute top-16 left-16 text-black flex flex-col gap-4 items-start'>
                            <p className=' font-medium uppercase  text-white '>Spring 2024</p>
                            <h4 className='text-4xl font-semibold text-white '>Top Wall <br />Planters</h4>
                            <button className='underline text-white  hover:text-teal-600 text-lg font-medium'>Shop now</button>
                        </div>
                    </div>

                    <div className="relative cursor-pointer h-4/5 bg-teal-700 flex items-center justify-center text-white overflow-hidden">
                        <img className='w-full h-full hover:transform hover:scale-105 hover:inset-0 duration-300' src="24_4.webp" alt="" />
                        <div className='absolute top-16 left-16 text-black flex flex-col gap-4 items-start'>
                            <p className='text-teal-600 font-medium uppercase '>Mid-season</p>
                            <h4 className='text-4xl font-semibold text-[#222222]'>The Elliot Modular <br />Planters</h4>
                            <button className='underline text-[#444444] hover:text-teal-600 text-lg font-medium'>Shop now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default College_1;