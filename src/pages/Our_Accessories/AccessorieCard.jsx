// eslint-disable-next-line react/prop-types
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { GrDocumentUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const AccessorieCard = ({ item, refetch }) => {
    // eslint-disable-next-line react/prop-types
    const { id, name, type, price, picture, description } = item;
    let tableName = 'accessories';
    const handleDelete = (id) => {
        axios.delete(`https://fix-nest-server-kappa.vercel.app/delete/${id}/${tableName}`)
            .then(res => {
                console.log(res.data)
                toast.error('item is deleted')
                refetch()
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="px-4 py-8 shadow-lg max-w-[310px] font-sans rounded-xl space-y-6 mx-auto bg-white flex flex-col" data-aos="zoom-out" data-aos-duration="3000"
            data-aos-easing="ease-in-out">
            <Toaster></Toaster>
            <div className="relative">
                <div className="flex justify-between items-center absolute top-4 left-4 right-4">
                    <div className="flex items-center">
                        {/* <svg
                    width={30}
                    className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-red-600 cursor-pointer"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                    </g>
                </svg> */}
                    </div>
                    <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">${price}</button>
                </div>
                <img className="rounded-lg bg-black/40 w-full h-48 lg:h-[280px]" src={picture} alt="img" />
            </div>
            <div className="text-center flex-grow space-y-3">
                <h6 className="text-lg">{name}</h6>
                <p className="text-blue-400 text-lg font-semibold">{type}</p>
                <p className="text-gray-400 text-sm font-semibold">{description}</p>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-6 text-sm">
                <div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-base">
                    <button
                    onClick={()=>handleDelete(id)}
                        className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                    >
                        <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-5 w-5 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                strokeWidth="2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            ></path>
                        </svg>

                        Delete Item
                    </button>

                    <Link to={`/update/${id}`} className="flex items-center gap-2">
                        <GrDocumentUpdate />
                        <span className="text-black">Update</span>
                    </Link>
                </div>
            </div>
        </div>

    );
};
export default AccessorieCard;