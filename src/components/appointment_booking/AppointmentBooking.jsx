import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointment.css'
const AppointmentBooking = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
        // Handle date change
    };
    const calendarStyle = {
        fontSize: '16px' // Adjust the font size as needed
    };
    return (
        <div>
        <h1 className="font-inter font-extrabold text-4xl text-center mt-3" data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">Appointment<span className="text-blue-400">-</span>Booking</h1>
        <div className=' mx-14 mt-20'>
            <div className="flex items-center justify-between">
            <div className='flex-1'>
            <form className="md:mx-10 flex-1" data-aos="fade-right" data-aos-duration="3000"
                    data-aos-easing="ease-in-out">
                    <h1 className="font-inter font-semibold text-2xl text-center underline pb-5 ">Information about you</h1>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Phone Number</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="img" id="img" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter a valid Email Address</label>
                            <div className="mt-5">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Please tell us problem in details"
                                    multiline
                                    rows={4}
                                    sx={{width: '100%'}}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex-1 calendar-container' data-aos="fade-left" data-aos-duration="3000"
                    data-aos-easing="ease-in-out">
                <Calendar onChange={onChange} style={calendarStyle} value={date} className="custom-calendar"/>
            </div>
        </div>
        <div className='flex justify-center items-center gap-10 mr-12 mt-10'>
        <button className='p-3 bg-blue-500 hover:bg-blue-700 text-white lg:w-96' data-aos="zoom-in" data-aos-duration="3000">Cancel</button>
        <button className='p-3 bg-blue-500 hover:bg-blue-700 text-white lg:w-96' data-aos="zoom-in" data-aos-duration="3000">Book Now</button>
        </div>
        </div>
        </div>
    );
};

export default AppointmentBooking;