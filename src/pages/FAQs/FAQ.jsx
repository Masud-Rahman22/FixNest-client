import { useState } from 'react';

const accordionData = [{ title: 'How long will it take to repair my device?', subtitle: 'Our mission at FixNest is to get your device back in your hands as quickly as possible. Depending on the complexity of the issue, repairs typically take between [X hours/days] to [Y hours/days]. Rest assured, we prioritize efficiency without compromising on quality.', colorBg: 'bg-black', colorBorder: 'border-black' }, { title: 'What types of devices do you repair?', subtitle: 'FixNest specializes in repairing a diverse range of mobile devices, including smartphones and tablets from leading brands like Apple, Samsung, Google, and more. Whether it is a cracked screen, battery replacement, water damage, or software issues, count on us to restore your device to its optimal condition.', colorBg: 'bg-blue-400', colorBorder: 'border-blue-400' }, { title: 'Do you offer a warranty on repairs?', subtitle: 'Absolutely! We are confident in the quality of our repairs. All services come with a comprehensive one year warranty against defects in parts and workmanship. This warranty ensures peace of mind, knowing your device is covered long after leaving our repair center.', colorBg: 'bg-blue-900', colorBorder: 'border-blue-900' }, { title: 'How much will the repair cost?', subtitle: 'Our pricing is transparent and competitive. The cost of repairs varies based on the specific issue and device model. We provide complimentary diagnostics, followed by a detailed quote before proceeding with the repair. No hidden fees, just honest pricing.', colorBg: 'bg-black', colorBorder: 'border-black' }, { title: 'Can I schedule an appointment for repairs?', subtitle: 'While appointments are not mandatory, we recommend scheduling one to ensure prompt service and minimal waiting time. You can conveniently book an appointment through our website or by giving us a call. Walk-ins are also welcome, with priority given to scheduled appointments.', colorBg: 'bg-blue-400', colorBorder: 'border-blue-400' }, { title: 'What safety measures are in place amidst the COVID-19 pandemic?', subtitle: 'Your safety is paramount to us. In response to the ongoing pandemic, we have implemented rigorous health and safety protocols at our repair center. These include regular sanitization, mandatory mask-wearing.', colorBg: 'bg-blue-900', colorBorder: 'border-blue-900' }, { title: 'Do you offer data backup services?', subtitle: 'Yes, we understand the importance of your data. Upon request, we can assist with data backup before proceeding with repairs. Our technicians take utmost care to ensure the safety and confidentiality of your personal information throughout the repair process.', colorBg: 'bg-black', colorBorder: 'border-black' }, { title: 'Are your technicians certified?', subtitle: 'Absolutely! Our technicians are highly trained and certified professionals with extensive experience in mobile device repairs. You can trust that your device is in capable hands, and we will strive to deliver exceptional service with every repair.', colorBg: 'bg-blue-400', colorBorder: 'border-blue-400' }, { title: 'Do you provide mail-in repair services?', subtitle: 'Yes, we offer convenient mail-in repair services for customers who are unable to visit our physical location. Simply reach out to us to initiate the process, and we will guide you through the steps to securely send in your device for repair. Once fixed, we will promptly return it to you, good as new.', colorBg: 'bg-blue-900', colorBorder: 'border-blue-900' }];
const FAQ = () => {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div>
            <h1 className="font-inter font-extrabold text-4xl text-center mb-10 mt-6">Our<span className="text-blue-400">-</span>Top<span className="text-blue-400">-</span>Services</h1>
            <div className="w-fit mx-auto h-[500px] flex gap-1">

                {accordionData.map((_, idx) => (
                    <div key={idx} className="flex">
                        {/* toggle item */}
                        <button onClick={() => handleToggle(idx)} className={`h-full flex justify-around flex-col items-center w-14 ${_.colorBg} text-white rounded-lg relative`}>
                            {isActive === idx && <span className={`w-0 h-0 ${_.colorBorder} border-r-[20px] border-b-[20px] border-r-transparent absolute rotate-[225deg] left-10 top-4`}></span>}
                            <p>{idx + 1}</p>
                            <p className="rotate-[270deg]">Example</p>
                        </button>
                        {/* container */}
                        <div
                            className={`grid place-content-center bg-gray-200 shadow-md rounded-lg ${isActive === idx ? 'w-56 px-5 opacity-1 scale-1' : 'w-0 opacity-0 scale-0'
                                } text-black ml-2 duration-300 ease-in-out`}
                        >
                            <h2 className="lg:text-2xl font-black">{_.title}</h2>
                            <p className="text-black/60">{_.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
