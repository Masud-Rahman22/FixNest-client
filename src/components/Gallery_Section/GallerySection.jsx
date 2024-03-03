import { useState } from "react";

export const GallerySection = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliderImages = [{ img: "https://i.ibb.co/2tyBX80/trans-person-working-office-with-colleagues.jpg", }, { img: "https://i.ibb.co/Zfx637v/front-view-person-repairing-motherboard.jpg", }, { img: "https://i.ibb.co/26DCxQ1/male-technician-working-computer-ram.jpg", }, { img: "https://i.ibb.co/5s2Wcyz/your-service-shop-worker.jpg", }, { img: "https://i.ibb.co/9GwrzTk/two-males-looking-pad.jpg", }, { img: "https://i.ibb.co/YyFM3d8/professional-tattooer-black-gloves-holding-tattoo-machine-hand-preparing-tattoo-modern-studio.jpg", },];

    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1);
    return (
        <div>
            <h1 className="font-inter font-extrabold text-4xl text-center mb-10 mt-20">Meet<span className="text-blue-400">-</span>Our<span className="text-blue-400">-</span>Team</h1>
            <div className="w-full mx-auto h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative bg-black">
                <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                    {/* arrow left */}
                    <button onClick={prevSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                    </button>
                    {/* arrow right */}
                    <button onClick={nextSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                    </button>
                </div>
                {/* slider container */}
                <div className="h-[540px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-300 flex items-center"
                    style={{ transform: `translateX(-${currentSlider * 50}%)` }}>
                    {/* sliderImages */}
                    {sliderImages.map((slide, inx) => (
                        <div key={inx}
                            className={`${currentSlider === inx ? "h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px]" : "h-[220px] sm:h-[260px] md:h-[380px] lg:h-[480px] scale-95 opacity-40"} min-w-[50%] relative duration-200`}
                            style={{ perspective: "200px" }}>
                            <img src={slide.img} className="w-full h-full bg-gray-900 rounded-lg duration-300" alt={slide.tags} style={{ transform: `${currentSlider - 1 === inx ? "rotateY(4deg)" : currentSlider + 1 === inx ? "rotateY(-4deg)" : ""}`, transformStyle: "preserve-3d", }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};