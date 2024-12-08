const Hero_1 = () => {
    return (
        <div className="h-[450px] sm:h-[600px] md:h-[720px] w-full bg-[#F4EBE0] flex flex-col md:flex-row items-center justify-center px-4 md:px-16 lg:px-32">
            <div className="md:w-1/2 flex justify-center md:justify-end text-center md:text-left mb-6 md:mb-0">
                <div>
                    <p className="text-[#111] text-lg md:text-2xl mb-4">
                        Quick Parcel Delivery, <span className="text-[#A0B543]">From $25</span>
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#222222] font-semibold mb-4">
                        Handing Plants Up to 45% Discount!
                    </h1>
                    <button className="text-lg py-2 px-4 bg-black text-white font-medium hover:bg-[#A0B543] transition-colors duration-300">
                        Explore Now
                    </button>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img
                    src="banner_24_3.webp"
                    className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-full"
                    alt="Hero Banner"
                />
            </div>
        </div>
    );
};

export default Hero_1;
