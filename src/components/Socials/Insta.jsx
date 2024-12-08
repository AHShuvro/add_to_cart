import React from 'react';
import { instaImg } from '../../data/products';
import { FaInstagram } from "react-icons/fa";

const Insta = () => {
    return (
        <div className="mt-24 px-4">
            {/* Header */}
            <div className="flex flex-col items-center gap-4 mb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#222222] font-semibold text-center">
                    @ Morata! Follow Us On Instagram
                </h3>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 container mx-auto">
                {
                    instaImg.slice(0, 5).map((item, idx) => (
                        <div
                            className="relative flex items-center justify-center cursor-pointer"
                            key={idx}
                        >
                            <img
                                className="w-full h-auto max-w-full sm:max-w-[12rem] lg:max-w-[16.375rem] object-cover"
                                src={item.image}
                                alt=""
                            />
                            <div
                                className="bg-gray-50 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full absolute inset-0 m-auto flex items-center justify-center text-lg sm:text-xl lg:text-2xl"
                            >
                                <FaInstagram />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Insta;
