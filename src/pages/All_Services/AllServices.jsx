import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('https://fix-nest-server-kappa.vercel.app/service')
            .then(res => setServices(res.data))
            .catch(err => console.error(err.message))
    }, [])
    return (
        <div className="grid grid-cols-4 gap-5 ml-10 my-10">
            {
                services?.map((service) => <ServiceCard key={service.charge} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllServices;