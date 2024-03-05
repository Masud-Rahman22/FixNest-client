import Lottie from "lottie-react";
import animation from '../../../public/assets/ourWork/Animation - 1709116018169.json'
const OurWork = () => {
    return (
        <div>
            <h1 className="font-inter font-extrabold text-4xl text-center mt-3" data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">The<span className="text-blue-400">-</span>Repair<span className="text-blue-400">-</span>Pulse</h1>
            <div className="grid grid-cols-3 gap-5 my-10 text-center mx-10">
                <div className="space-y-5 mt-14" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-sine">
                    <h1 className="text-3xl font-semibold font-inter underline">Assessment</h1>
                    <p className="text-base font-inter font-medium text-blue-900">Identify the reported issue and inspect the phone for visible damage or malfunctioning components.</p>
                    <h1 className="text-3xl font-semibold font-inter underline">Diagnosis</h1>
                    <p className="text-base font-inter font-medium text-blue-900">Diagnose the root cause of the problem through tests and examination of internal components.</p>
                    <h1 className="text-3xl font-semibold font-inter underline">Disassembly</h1>
                    <p className="text-base font-inter font-medium text-blue-900">Carefully disassemble the phone to access internal parts, using appropriate tools and techniques.</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-sine"
                    >
                    <Lottie animationData={animation}></Lottie>
                </div>
                <div className="space-y-5 mt-14" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-sine">
                    <h1 className="text-3xl font-semibold font-inter underline">Repair or Replacement</h1>
                    <p className="text-base font-inter font-medium text-blue-900">Perform necessary repairs or replacements to fix the identified issues with the phone.</p>
                    <h1 className="text-3xl font-semibold font-inter underline">Reassembly</h1>
                    <p className="text-base font-inter font-medium text-blue-900">Reassemble the phone, ensuring all components are correctly aligned and secured.</p>
                    <h1 className="text-3xl font-semibold font-inter underline">Testing and Quality Assurance</h1>
                    <p className="text-base font-inter font-medium text-blue-900">Thoroughly test the phone to verify repairs and ensure proper functionality before returning it to the customer.</p>
                </div>
            </div>
        </div>
    );
};

export default OurWork;