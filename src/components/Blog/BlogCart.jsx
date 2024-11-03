
import { blogInfo } from "../../data/products";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { MdOutlineChevronRight } from "react-icons/md";


const BlogCart = () => {
    return (
        <div className="w-full container mx-auto my-16">
            <div className='flex flex-col items-center gap-4 mb-8'>
                <h3 className='text-4xl text-[#222222] font-semibold'>From The Blog</h3>
                <div className='cursor-pointer flex items-center  duration-150 font-semibold text-[#222222] hover:text-teal-600'>
                    <p>See All Blogs</p><MdOutlineChevronRight className="mt-[3px]" />
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
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1424: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1624: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination]}
                className="w-full"
            >
                {blogInfo.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div className='group relative p-4 bg-white'>
                            <div className="overflow-hidden relative">
                                <div className="pointer-events-none"
                                >
                                    <img
                                        className='duration-1000 max-h-80 w-full group-hover:transform group-hover:scale-105 inset-0'
                                        src={item.img1}
                                        alt={`${item.name} on hover`}
                                    />
                                </div>
                                
                            </div>
                            <div className="mt-4 flex flex-col items-start gap-2">
                                <p className="font-semibold text-sm text-white px-2 py-1 bg-teal-600 rounded-sm cursor-pointer">{item.name}</p>
                                <p className="font-semibold text-2xl text-[#222222] cursor-pointer hover:text-teal-600 duration-300">{item.title}</p>
                                <p className="font-semibold text-sm text-teal-600">{item.author}</p>
                                <p className="font-bold text-lg hover:text-teal-600 duration-300 cursor-pointer">Read more</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BlogCart;