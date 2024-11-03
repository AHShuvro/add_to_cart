import React from 'react';
import { instaImg } from '../../data/products';
import { FaInstagram } from "react-icons/fa";

const Insta = () => {
    return (
        <div className='mt-24'>
            <div className='flex flex-col items-center gap-4 mb-8'>
                <h3 className='text-4xl text-[#222222] font-semibold'>@ Morata! Follow Us On Instagram</h3>
            </div>
            <div className='grid grid-cols-5 container mx-auto'>
                {
                    instaImg.slice(0, 5).map((item, idx) => (
                        <div className='relative flex items-center justify-center cursor-grab' key={idx}>
                            <img className='w-[16.375rem] h-[16.375rem]' src={item.image} alt="" />
                            <div className='bg-gray-50 w-14 h-14 rounded-full absolute inset-0 m-auto flex items-center justify-center text-xl'>
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




// import React, { useState, useEffect } from 'react';
// import { instaImg } from '../../data/products';
// import { FaInstagram } from "react-icons/fa";

// const Insta = () => {
//     const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const handleMouseMove = (event) => {
//             setCursorPosition({ x: event.clientX, y: event.clientY });
//         };
//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <div className="relative">
//             <div className='flex flex-col items-center gap-4 mb-8'>
//                 <h3 className='text-4xl text-[#222222] font-semibold'>@ Morata! Follow Us On Instagram</h3>
//             </div>
//             <div className='grid grid-cols-5 container mx-auto'>
//                 {
//                     instaImg.slice(0, 5).map((item, idx) => (
//                         <div className='relative flex justify-center items-center' key={idx}>
//                             <img className='w-[16.375rem] h-[16.375rem]' src={item.image} alt="" />
//                             <div className='bg-gray-50 w-12 h-12 rounded-full absolute inset-0 m-auto flex items-center justify-center'>
//                                 <FaInstagram />
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//             {/* Custom Cursor */}
//             <div 
//                 className='custom-cursor fixed flex items-center justify-center pointer-events-none'
//                 style={{ 
//                     top: cursorPosition.y, 
//                     left: cursorPosition.x 
//                 }}
//             >
//                 <FaInstagram className="text-3xl text-[#222222]" />
//             </div>
//         </div>
//     );
// };

// export default Insta;

