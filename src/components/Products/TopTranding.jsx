
import { topTrandingProducts } from "../../data/products";
//react icons
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { FcRating } from "react-icons/fc";
import { MdOutlineChevronRight } from "react-icons/md";

const TopTranding = () => {
    return (

        <div className="my-16 px-16">
            <div className='flex flex-col items-center gap-4 mb-8'>
                <h3 className='text-4xl text-[#222222] font-semibold'>Top Trending</h3>
                <div className='cursor-pointer flex items-center  duration-150 font-semibold text-[#222222] hover:text-teal-600'>
                    <p>View all Products  </p><MdOutlineChevronRight className="mt-[3px]" />
                </div>
            </div>
            <div className="grid grid-cols-5">
                {
                    topTrandingProducts.map((item, idx) => (
                        <div key={idx} className='group relative p-4 bg-white my-2'>
                            <div className="overflow-hidden relative">
                                <div className="pointer-events-none"
                                >
                                    <img
                                        className='transition-opacity duration-500 transform scale-100 group-hover:scale-105 opacity-100 group-hover:opacity-0'
                                        src={item.img1}
                                        alt={item.name}
                                    />
                                    <img
                                        className='transition-opacity duration-500 transform scale-110 opacity-0 group-hover:opacity-100 absolute inset-0'
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
                                <p className="font-semibold hover:text-teal-600 duration-300 cursor-pointer">{item.name}</p>
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
                    ))
                }
            </div>
        </div>
    );
};

export default TopTranding;