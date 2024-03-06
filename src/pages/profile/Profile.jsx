import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import {motion} from 'framer-motion'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <motion.div
        animate={{ rotate: 360 }}
        transition={{ type: 'spring', restSpeed: 0.5 }}
        >
            <div className="p-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-4 my-10 flex flex-col justify-center items-center mx-auto bg-white">
                <div className="relative group">
                    <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full" src={user?.photoURL} alt="card navigate ui" />
                    <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
                    <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 animate-ping"></span>
                </div>
                <div className="text-center space-y-1">
                    <h1 className="text-2xl text-gray-700">{user?.displayName}</h1>
                    <p className="text-gray-400 text-sm">MERN Stack Developer</p>
                </div>
                <div className="flex justify-between w-full py-2">
                    <div className="text-center space-y-1">
                        <p className="text-gray-500">Posts</p>
                        <p className="text-xl font-mono text-gray-700">450</p>
                    </div>
                    <div className="text-center space-y-1">
                        <p className="text-gray-500">Following</p>
                        <p className="text-xl font-mono text-gray-700">3</p>
                    </div>
                    <div className="text-center space-y-1 ">
                        <p className="text-gray-500">Followers</p>
                        <p className="text-xl font-mono text-gray-700">1M</p>
                    </div>
                </div>
                <p className="text-center text-sm text-gray-500">{user?.email}</p>
                <p className="text-center text-sm text-gray-500 pb-2">Me? I am a developer who loves to develope things just like this project you are checking right now. I know it is not quite the best one you see so far but i will continuously work on it.✌️</p>
                <div className="flex justify-between gap-4 py-2">
                    <a href="https://www.facebook.com/profile.php?id=100009878949750" className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded-full"><FaFacebook /></a>
                    <a href="https://twitter.com/MasudRhmn2001" className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded-full"><FaXTwitter /></a>
                    <a href="https://www.linkedin.com/in/masud-rahman-91a499289/" className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded-full"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/callmemasud/" className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded-full"><BsInstagram /></a>
                </div>
                <button className="hover:bg-[#0095FF] hover:scale-95 font-medium hover:text-white w-[80%] py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] t duration-500">View Profile</button>
            </div>
        </motion.div>
    )
};
export default Profile;
