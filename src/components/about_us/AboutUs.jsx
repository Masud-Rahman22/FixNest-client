import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import './AboutUs.css'
const AboutUs = () => {
    return (
            <div className='bg-img bg-fixed text-white my-20 h-screen'>
            <div className='bg-slate-800 bg-opacity-40 py-10 h-screen'>
                <div className='flex justify-center items-center py-10 px-36 mt-32'>
                    <div className='flex-1'>
                    </div>
                    <div className="md:ml-10 flex-1 space-y-8">
                        <h1 className="text-5xl text-black font-inter font-bold">About <span className="text-blue-900">Fix</span><span className="text-blue-400">Nest</span></h1>
                        <p className="text-left text-xl font-normal text-gray-800 leading-normal">FixNest is your trusted partner for reliable and affordable phone repair services. Our team of skilled technicians is dedicated to restoring your devices to their optimal condition, ensuring you stay connected with confidence.</p>
                        <button className="bg-blue-400 btn text-black w-40 h-10 text-xl">Learn More</button>
                        <div className="flex text-black">
                        <FaFacebook className="social-icon" />
                        <FaInstagram className="social-icon"/>
                        <FaTwitter className="social-icon"/>
                        <FaLinkedin className="social-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;