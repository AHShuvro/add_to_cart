import React from 'react';

const Contact_1 = () => {
    return (
        <div className='my-24 flex flex-col items-center'>
            <div className='flex flex-col items-center gap-4 mb-8'>
                <h3 className='text-4xl text-[#222222] font-semibold'>New Arrivals</h3>
                <p className='text-[#333333]'>
                    Subscribe to the Ohey mailing list to receive updates on new arrivals, special offers, and other discount information.
                </p>
            </div>
            <div className='flex flex-col items-center w-full max-w-md'>
                <input 
                    className='w-full p-3 rounded-lg shadow-md outline-none  placeholder:text-center'
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    style={{ padding: '0.5rem 1rem', textAlign: 'center', lineHeight: '1.5' }} 
                />
                <button 
                    className='mt-4 px-16 p-3 text-xs text-white font-semibold bg-black transition duration-200 uppercase'
                    type="submit"
                >
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Contact_1;
