import { arrivalProducts } from "../../data/products";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

//react icons
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { FcRating } from "react-icons/fc";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";


const ArrivalsProducts = () => {
    return (
        <div className="w-full  px-16 my-16">
            <div className='flex flex-col items-center gap-4 mb-8'>
                <h3 className='text-4xl text-[#222222] font-semibold'>New Arrivals</h3>
                <div className='cursor-pointer flex items-center  duration-150 font-semibold text-[#222222] hover:text-teal-600'>
                    <Link className="flex items-center " to={'/shop'}><p>View all Products  </p><MdOutlineChevronRight className="mt-[3px]" /></Link>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1424: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1624: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination]}
                className="w-full"
            >
                {arrivalProducts.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div className='group relative p-4 bg-white rounded-lg shadow-md my-2'>
                            <div className="overflow-hidden relative">
                                <div className="pointer-events-none"
                                >
                                    <img
                                        className='transition-opacity duration-300 transform scale-100 group-hover:scale-105 opacity-100 group-hover:opacity-0'
                                        src={item.img1}
                                        alt={item.name}
                                    />
                                    <img
                                        className='transition-opacity duration-300 transform scale-150 opacity-0 group-hover:opacity-100 absolute inset-0'
                                        src={item.img2}
                                        alt={`${item.name} on hover`}
                                    />
                                    <div className="bg-black opacity-10 w-full h-full absolute top-0 hidden group-hover:block pointer-events-none"></div>
                                </div>

                                <div className="absolute hidden group-hover:flex flex-col gap-1 top-4 right-4 pointer-events-auto">
                                    <div className="w-8 h-8 flex items-center justify-center duration-300 rounded-full text-center bg-white hover:bg-teal-600 text-black hover:text-white cursor-pointer"><FaRegHeart /></div>
                                    <div className="w-8 h-8 flex items-center justify-center duration-300 rounded-full text-center bg-white hover:bg-teal-600 text-black hover:text-white cursor-pointer"><IoLayersOutline /></div>
                                    <div className="w-8 h-8 flex items-center justify-center duration-300 rounded-full text-center bg-white hover:bg-teal-600 text-black hover:text-white cursor-pointer"><FaRegEye /></div>
                                </div>
                                <div className="w-full flex justify-center pointer-events-auto">
                                    <button className="absolute -bottom-14 group-hover:bottom-4 duration-300 w-full py-2 text-center bg-teal-600 hover:bg-teal-700 text-white font-medium">
                                        Add TO Cart
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col items-center gap-2">
                                <p className="font-semibold text-lg">{item.name}</p>
                                <div className="flex gap-1">
                                    <FcRating />
                                    <FcRating />
                                    <FcRating />
                                    <FcRating />
                                    <FcRating />
                                </div>
                                <p className="text-sm text-gray-500">Price: {item.price}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ArrivalsProducts;
