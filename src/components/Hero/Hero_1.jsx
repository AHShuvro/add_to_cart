
const Hero_1 = () => {
    return (
        <div className='h-[450px] sm:h-[600px] md:h-[720px] w-full bg-[#F4EBE0] flex items-center justify-center px-64'>
            <div className='w-1/2 flex justify-end'>
                <div>
                    <p className='text-[#111] text-lg md:text-2xl mb-6'>Quick Parcel Delivery, <span className='text-[#A0B543]'>From $25</span></p>
                    <h1 className='text-6xl text-[#222222] font-semibold mb-6'>Handing Plants Up to 45% Discount!</h1>
                    <button className='text-lg py-2 px-4 bg-black text-white font-medium'>Explore Now</button>
                </div>
            </div>
            <div className='w-1/2'>
                <img src="banner_24_3.webp" className='w-full' alt="" />
            </div>

        </div>
    );
};

export default Hero_1;