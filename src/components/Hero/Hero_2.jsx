
const Hero_2 = () => {
    return (
        <div className='relative group h-[450px] sm:h-[600px] md:h-[720px] w-full bg-[#F8F4EC] flex flex-col items-center justify-center overflow-hidden cursor-pointer'>
            <div className=' absolute top-12 flex flex-col items-center z-10'>
                <p className='text-white text-sm font-bold bg-teal-500 mb-6 py-1 px-4 uppercase'>Up to 50% off</p>
                <h1 className='text-6xl text-[#222222] font-medium mb-6'>Bring Nature In Your Home</h1>
                <p className='text-lg text-[#333333] text-center font-medium'>Hollyday shoping with 3% black reawards. <br />Offer expires 12/31/2024</p>
            </div>
            <img className=" group-hover:transform group-hover:scale-105 group-hover:inset-0 duration-700" src="24_5.webp" alt="" />

        </div>
    );
};

export default Hero_2;