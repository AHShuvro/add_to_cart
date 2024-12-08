import React from 'react';

const Contact_1 = () => {
    return (
        <div className="my-24 px-4 flex flex-col items-center">
            {/* Header Section */}
            <div className="flex flex-col items-center gap-4 mb-8 text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#222222] font-semibold">
                    New Arrivals
                </h3>
                <p className="text-sm sm:text-base text-[#333333] max-w-lg">
                    Subscribe to the Ohey mailing list to receive updates on new arrivals, special offers, and other discount information.
                </p>
            </div>

            {/* Input and Button Section */}
            <div className="flex flex-col items-center w-full max-w-lg">
                <input
                    className="w-full p-3 rounded-lg shadow-md outline-none placeholder-gray-500 placeholder:text-center text-center border border-gray-300 focus:ring-2 focus:ring-black transition"
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                <button
                    className="mt-4 px-8 sm:px-16 py-3 text-sm sm:text-base text-white font-semibold bg-black hover:bg-gray-800 transition duration-200 uppercase rounded-lg shadow-md"
                    type="submit"
                >
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Contact_1;
