import React from 'react';

const College_1 = () => {
    return (
        <div className="px-4 sm:px-8 lg:px-16 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-screen">
                {/* Left Column */}
                <div className="flex flex-col gap-4 h-auto md:h-full bg-gray-100 rounded-lg overflow-hidden">
                    {/* First Section */}
                    <div className="relative cursor-pointer h-64 sm:h-80 md:h-3/5 bg-teal-500 flex items-center justify-center text-white overflow-hidden">
                        <img
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            src="24_1.webp"
                            alt="Hoodies for Her"
                        />
                        <div className="absolute top-8 left-8 sm:top-12 sm:left-12 text-black flex flex-col gap-2 sm:gap-4 items-start">
                            <p className="text-teal-600 font-medium uppercase">Mid-season</p>
                            <h4 className="text-2xl sm:text-4xl font-semibold text-[#222222]">Hoodies For Her</h4>
                            <p className="text-sm sm:text-base text-[#222222]">Available online and in-store</p>
                            <button className="underline text-sm sm:text-lg text-[#444444] hover:text-teal-600 font-medium">
                                Shop now
                            </button>
                        </div>
                    </div>
                    {/* Second Section */}
                    <div className="relative cursor-pointer h-40 sm:h-56 md:h-2/5 bg-teal-700 flex items-center justify-center text-white overflow-hidden">
                        <img
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            src="24_2.webp"
                            alt="Succulent Metal"
                        />
                        <div className="absolute top-8 left-8 sm:top-12 sm:left-12 text-black flex flex-col gap-2 sm:gap-4 items-start">
                            <p className="font-medium uppercase text-teal-600">Top trending</p>
                            <h4 className="text-2xl sm:text-4xl font-semibold text-[#222222]">
                                Succulent Metal <br /> Upto 30%
                            </h4>
                            <button className="underline text-sm sm:text-lg text-[#222222] hover:text-teal-600 font-medium">
                                Shop now
                            </button>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col gap-4 h-auto md:h-full bg-gray-100 rounded-lg overflow-hidden">
                    {/* First Section */}
                    <div className="relative cursor-pointer h-40 sm:h-56 md:h-2/5 bg-teal-500 flex items-center justify-center text-white overflow-hidden">
                        <img
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            src="24_3.webp"
                            alt="Top Wall Planters"
                        />
                        <div className="absolute top-8 left-8 sm:top-12 sm:left-12 text-white flex flex-col gap-2 sm:gap-4 items-start">
                            <p className="font-medium uppercase">Spring 2024</p>
                            <h4 className="text-2xl sm:text-4xl font-semibold">
                                Top Wall <br /> Planters
                            </h4>
                            <button className="underline text-sm sm:text-lg hover:text-teal-600 font-medium">
                                Shop now
                            </button>
                        </div>
                    </div>
                    {/* Second Section */}
                    <div className="relative cursor-pointer h-64 sm:h-80 md:h-4/5 bg-teal-700 flex items-center justify-center text-white overflow-hidden">
                        <img
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            src="24_4.webp"
                            alt="Elliot Modular Planters"
                        />
                        <div className="absolute top-8 left-8 sm:top-12 sm:left-12 text-black flex flex-col gap-2 sm:gap-4 items-start">
                            <p className="text-teal-600 font-medium uppercase">Mid-season</p>
                            <h4 className="text-2xl sm:text-4xl font-semibold text-[#222222]">
                                The Elliot Modular <br /> Planters
                            </h4>
                            <button className="underline text-sm sm:text-lg text-[#444444] hover:text-teal-600 font-medium">
                                Shop now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default College_1;
