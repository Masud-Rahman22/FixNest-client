import Lottie from "lottie-react";
import animation6 from '../../../public/assets/banner/Animation - 1709116253129.json'

const Banner = () => {
    return (
        <div>
            <div className="flex flex-row-reverse justify-around items-center">
                <div className="w-2/4">
                    <Lottie animationData={animation6}></Lottie>
                </div>
                <div>
                    <h1>Don't Worry.</h1>
                    <h1>We'll fix it.</h1>
                    <p>Welcome to Our <span className="text-blue-900">Fix</span><span className="text-blue-400">Nest</span>! Trust Us to Bring Your Phone Back to Life with Expert Service and Care!</p>
                    <input type="search" name="" id="" />
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;