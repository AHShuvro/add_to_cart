const Hero_2 = () => {
    return (
        <div className="relative group h-[450px] sm:h-[600px] md:h-[720px] w-full bg-[#F8F4EC] flex flex-col items-center justify-center overflow-hidden cursor-pointer">
            {/* Text Content */}
            <div className="absolute top-12 md:top-20 flex flex-col items-center z-10 px-4 text-center">
                <p className="text-white text-xs sm:text-sm font-bold bg-teal-500 mb-4 sm:mb-6 py-1 px-4 uppercase tracking-wide">
                    Up to 50% off
                </p>
                <h1 className="text-3xl sm:text-5xl md:text-6xl text-[#222222] font-medium mb-4 sm:mb-6">
                    Bring Nature Into Your Home
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#333333] font-medium">
                    Holiday shopping with 3% Black Rewards. <br className="hidden sm:block" />
                    Offer expires 12/31/2024
                </p>
            </div>

            {/* Background Image */}
            <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="24_5.webp"
                alt="Nature Background"
            />
        </div>
    );
};

export default Hero_2;
