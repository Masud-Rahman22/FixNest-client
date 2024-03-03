import axios from "axios";
import { useEffect, useState } from "react";
import AccessorieCard from "./AccessorieCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OurAccessories = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/accessories')
            .then(res => setItems(res.data))
            .catch(err => console.error(err.message))
    }, [])
    console.log(items)
    return (
        <div>
            <Tabs>
                <TabList className="flex border-b border-gray-200 justify-center">
                    <Tab className="text-gray-700 py-4 px-6 cursor-pointer border-b-2 border-transparent hover:border-gray-500 focus:outline-none">All</Tab>
                    <Tab className="text-gray-700 py-4 px-6 cursor-pointer border-b-2 border-transparent hover:border-gray-500 focus:outline-none">Apple</Tab>
                    <Tab className="text-gray-700 py-4 px-6 cursor-pointer border-b-2 border-transparent hover:border-gray-500 focus:outline-none">Samsung</Tab>
                    <Tab className="text-gray-700 py-4 px-6 cursor-pointer border-b-2 border-transparent hover:border-gray-500 focus:outline-none">Pixel</Tab>
                    <Tab className="text-gray-700 py-4 px-6 cursor-pointer border-b-2 border-transparent hover:border-gray-500 focus:outline-none">One Plus</Tab>
                    <Tab className="text-gray-700 py-4 px-6 cursor-pointer border-b-2 border-transparent hover:border-gray-500 focus:outline-none">Redmi</Tab>
                    <Tab className="text-gray-700 py-4 px-6 cursor-pointer border-b-2 border-transparent hover:border-gray-500 focus:outline-none">Realme</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-5 ml-10 my-10">
                        {
                            items?.map(item => <AccessorieCard key={item.id} item={item}></AccessorieCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-5 ml-10 my-10">
                        {
                            items?.slice(0,10).map(item => <AccessorieCard key={item.id} item={item}></AccessorieCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-5 ml-10 my-10">
                        {
                            items?.slice(10,20).map(item => <AccessorieCard key={item.id} item={item}></AccessorieCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-5 ml-10 my-10">
                        {
                            items?.slice(20,30).map(item => <AccessorieCard key={item.id} item={item}></AccessorieCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-5 ml-10 my-10">
                        {
                            items?.slice(30,40).map(item => <AccessorieCard key={item.id} item={item}></AccessorieCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-5 ml-10 my-10">
                        {
                            items?.slice(40,50).map(item => <AccessorieCard key={item.id} item={item}></AccessorieCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-5 ml-10 my-10">
                        {
                            items?.slice(50,60).map(item => <AccessorieCard key={item.id} item={item}></AccessorieCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurAccessories;