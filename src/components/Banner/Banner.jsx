import Lottie from "lottie-react";
import animation6 from '../../../public/assets/banner/Animation - 1709116253129.json'

const Banner = () => {
    return (
        <div>
            <div className="flex flex-row-reverse justify-between items-center mx-20">
                <div className="w-[1200px]">
                    <Lottie animationData={animation6}></Lottie>
                </div>
                <div className="font-inter space-y-4">
                    <h1 className="text-6xl font-extrabold">Don't Worry.</h1>
                    <h1 className="text-6xl font-extrabold text-blue-400">We'll fix it.</h1>
                    <p className="text-xl font-normal w-10/12 text-blue-900 pt-5 pb-10">Welcome to Our <span className="text-blue-900">Fix</span><span className="text-blue-400">Nest</span>! Trust Us to Bring Your Phone Back to Life with Expert Service and Care!</p>
                    <div className="flex justify-start">
                        <div className="relative">
                            <input type="text" placeholder="Search..." className="py-2 pl-8 pr-4 rounded-full border-2 border-gray-300 focus:border-gray-500 outline-none transition-colors duration-300 w-96" />
                            <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M21 21l-5.2-5.2M15 10.5A4.5 4.5 0 1 0 10.5 15 4.5 4.5 0 0 0 15 10.5z" />
                            </svg>
                            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-900 transition-colors duration-300">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;