import axios from "axios";
import { useEffect, useState } from "react";
import TopServicesCard from "./TopServicesCard";


const TopServices = () => {
    const [topServices, setTopServices] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/service')
            .then(res => setTopServices(res.data))
            .catch(err => console.error(err.message))
    }, [])
    return (
        <div>
            <h1 className="font-inter font-extrabold text-4xl text-center my-20">Our<span className="text-blue-400">-</span>Top<span className="text-blue-400">-</span>Services</h1>
        <div className="grid grid-cols-4 gap-5 lg:ml-10">
            {
                topServices?.slice(0,8).map(topService=> <TopServicesCard key={topService.charge} topService={topService}></TopServicesCard>)
            }
        </div>
        </div>
    );
};

export default TopServices;