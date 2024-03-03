// eslint-disable-next-line react/prop-types
import { GrDocumentUpdate } from "react-icons/gr";
const AccessorieCard = ({item}) => {
// eslint-disable-next-line react/prop-types
const {name,type,price,picture,description} = item;
    return (
        <div className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 my-20 mx-auto bg-white">
    <div className="relative">
        <div className="flex justify-between items-center absolute top-4 left-4 right-4">
            <div className="flex items-center">
                <svg
                    width={30}
                    className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white cursor-pointer"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                    </g>
                </svg>
            </div>
            <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">${price}</button>
        </div>
        <img className="rounded-lg bg-black/40 w-full h-48 lg:h-[280px]" src={picture} alt="img" />
    </div>
    <div className="text-center">
        <h6 className="text-lg">{name}</h6>
        <p className="text-gray-400 text-sm font-semibold">{type}</p>
        <p className="text-gray-400 text-sm font-semibold">{description}</p>
    </div>
    <div className="flex items-center justify-center flex-wrap gap-6 text-sm">
    <div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-base">
                <button className="px-4 py-2 rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
                <button className="flex items-center gap-2">
                <GrDocumentUpdate />
                    <span className="text-black">Update</span>
        </button>
        </div>
    </div>
</div>

    );
};
export default AccessorieCard;