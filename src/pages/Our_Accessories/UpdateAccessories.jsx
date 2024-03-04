import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function UpdateAccessories() {
    const [data, setData] = useState({})
    const id = useParams();
    const navigate = useNavigate()
    let tableName = 'accessories';
    const { handleSubmit, register } = useForm();
    const onSubmit = ({ itemName, itemType, price, itemPicture, itemDescription }) => {
        axios.put(`http://localhost:5000/update/${tableName}/${id.id}`, { itemName, itemType, price, itemPicture, itemDescription, id })
            .then(res => {
                console.log(res.data),
                toast.success('information updated')
                navigate('/ourAccessories')
            })
            .catch(err => console.error(err))
    }
    
    useEffect(() => {
        axios.get(`http://localhost:5000/${tableName}/${id.id}`)
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [id, tableName])
    const item = data[0];
    console.log(item)
    // const {name,type,price,picture,description} = item;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 md:w-11/12 mx-auto mt-16 h-[50vh]">
            <Toaster></Toaster>
        <div className="relative z-0 w-full mb-6 group">
            <input type="text" {...register('itemName')} defaultValue={item?.name} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input type="text" {...register('itemType')} defaultValue={item?.type} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Type</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input type="text" {...register('itemDescription')} defaultValue={item?.description} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Description</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
            <input type="number" {...register('price')} defaultValue={item?.price} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input type="text" {...register('itemPicture')} defaultValue={item?.picture} id="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Picture URL</label>
        </div>
        </div>
        <button type="submit" className="p-2 w-full text-white bg-blue-400">Update Item Information</button>
    </form>
    );
}
