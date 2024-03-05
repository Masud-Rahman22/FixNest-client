import Lottie from 'lottie-react';
import animation1 from '../../../public/assets/what_we_do/Animation - 1709196247840.json'
import animation2 from '../../../public/assets/what_we_do/Animation - 1709196925421.json'
import animation3 from '../../../public/assets/what_we_do/Animation - 1709197079733.json'

const What_We_Do = () => {
    return (
        <div className="lg:mt-14 mx-20">
            <h1 className="font-inter font-extrabold text-4xl text-center" data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">What<span className="text-blue-400">-</span>We<span className="text-blue-400">-</span>Do</h1>
            <div className="grid grid-cols-3 gap-10">
                <div data-aos="zoom-in" data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <div className='w-[400px] h-[400px] pt-6'>
                        <Lottie animationData={animation1}></Lottie>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-3xl font-bold font-inter text-center'>Expert Technicians</h1>
                        <p className='text-base font-normal text-gray-800 leading-normal text-center'>Our technicians are trained and certified to diagnose and repair issues with precision and efficiency. With years of experience in the industry, you can trust us to get the job done right the first time.</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <div className='w-[400px] h-[400px]'>
                        <Lottie animationData={animation2}></Lottie>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-3xl font-bold font-inter text-center'>Quality Parts</h1>
                        <p className='text-base font-normal text-gray-800 leading-normal text-center'>We use only high-quality replacement parts sourced from trusted suppliers to ensure optimal performance and longevity for your devices. Rest assured, your phone will be restored to its original functionality.</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <div className='w-[400px] h-[400px] pt-10'>
                        <Lottie animationData={animation3}></Lottie>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-3xl font-bold font-inter text-center'>Affordable Pricing</h1>
                        <p className='text-base font-normal text-gray-800 leading-normal text-center'>We believe in transparent pricing and offer competitive rates for all our repair services. No hidden fees or surprises – just upfront pricing and exceptional value for your money.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default What_We_Do;