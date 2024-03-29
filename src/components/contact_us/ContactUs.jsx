import { IoCall } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const ContactUs = () => {
    <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    ></Box>
    return (

        <div>
            <h1 className="font-inter font-extrabold text-4xl text-center mt-20" data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">Contact<span className="text-blue-400">-</span>Us</h1>
            <div className="flex justify-between items-center mx-20 mt-10 gap-20">
                <form className="md:mx-10 flex-1" data-aos="zoom-in-right" data-aos-duration="1000"
                    data-aos-easing="ease-in-shine">
                    <h1 className="font-inter font-semibold text-2xl text-center underline pb-5 ">Online Inquiry</h1>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="img" id="img" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter a valid Email Address</label>
                            <div className="mt-5">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Enter Your Question"
                                    multiline
                                    rows={4}
                                    sx={{width: '100%'}}
                                />
                            </div>
                        </div>
                    </div>

                    <button className="hover:bg-[#0095FF] hover:scale-95 font-medium hover:text-white w-full py-2 rounded-full hover:shadow-xl   text-black shadow-[0px_0px_10px_#E2DADA] t duration-500 bg-blue-400">Submit</button>
                </form>
                <div className="flex-1 space-y-5" data-aos="zoom-in-lefts" data-aos-duration="1000"
                    data-aos-easing="ease-in-shine">
                    <h1 className="font-inter font-semibold text-2xl text-center underline pb-5 ">Contact Details</h1>
                    <div className="flex items-center justify-start gap-5">
                        <IoCall className="w-[30px] h-[30px] text-blue-400" />
                        <h1 className="text-3xl font-inter font-semibold">Call Us</h1>
                    </div>
                    <p className="text-2xl font-inter font-normal text-left">+88 01850556560</p>
                    <div className="flex items-center justify-start gap-5">
                        <IoLocation className="w-[30px] h-[30px] text-blue-400" />
                        <h1 className="text-3xl font-inter font-semibold">Our Location</h1>
                    </div>
                    <p className="text-2xl font-inter font-normal text-left">Dewbhog panir tanki, Narayanganj, Dhaka</p>
                    <div className="flex items-center justify-start gap-5">
                        <MdEmail className="w-[30px] h-[30px] text-blue-400" />
                        <h1 className="text-3xl font-inter font-semibold">Email us</h1>
                    </div>
                    <p className="text-2xl font-inter font-normal text-left">masudrhmn6560@gmail.com</p>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;