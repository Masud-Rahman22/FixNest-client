import { useState } from "react";

export const CarouselMain = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://i.ibb.co/ThLjN6j/smartphone-nature-concept.jpg", tags: "Room", }, { img: "https://i.ibb.co/KWZ4CcJ/s24-ultra-review.jpg", tags: "Room", }, { img: "https://i.ibb.co/qWmyWG0/20230925-google-pixel-8-pro-04.webp", tags: "Room", }, { img: "https://i.ibb.co/hcxH8d0/One-Plus-9-Pro-back.jpg", tags: "Room", }, { img: "https://i.ibb.co/JxRh6g7/panoramic-technology-banner-with-electronic-devices.jpg", tags: "Room", },];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    return (
        <div className="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
            {/* arrow */}
            <button onClick={nextSlider} className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite ">
                <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
            </button>
            {/* slider container */}
            <div className="ease-linear duration-300 flex gap-[2%]" style={{ transform: `translateX(-${currentSlider * 52}%)` }}>
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <div key={inx}
                        className={`${currentSlider === inx ? 'h-[310px] md:h-[310px] lg:h-[580px] ' : 'h-[260px] md:h-[280px] lg:h-[480px]'} min-w-[50%] bg-black/30 relative duration-200`}
                    >
                        <img src={slide.img} className="w-full h-full" alt={slide.tags} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Brands = () => {
    return (
        <div className="max-w-7xl mx-auto h-[540px] lg:h-[670px] px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 relative mb-10">
            <div className="bg-[#f3f9fc] w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div>
            <div className="w-2/3 lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
                <h1 className="text-lg md:text-2xl lg:text-[40px] font-bold"><span className="text-blue-900">20+</span> Brands services </h1>
                <h1 className="text-lg md:text-2xl lg:text-[40px] font-bold">provided</h1>
                <p className="text-[#616161] text-xs md:text-lg">We specialize in repairing mobile devices from renowned brands such as Apple, Samsung, Google Pixel, and more. With our team of skilled technicians, we offer high-quality repairs, including screen replacements, battery replacements, and software troubleshooting, ensuring your device is restored to its optimal condition.</p>
                <button className="font-bold py-2 xl:py-3 text-xs md:text-base lg:text-lg xl:text-xl hover:scale-95 duration-300 px-4 lg:px-10 text-black bg-blue-400">Explore More</button>
            </div>
            <CarouselMain />
        </div>
    );
};