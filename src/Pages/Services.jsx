import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import SingleService from './SingleService';

const Services = () => {

    const { loading } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');
    const [dataLoading, setDataLoading] = useState(true);


    useEffect(() => {
        document.title = "Services | Service-review";
    }, []);

    useEffect(() => {
        const fetchServices = async () => {
            setDataLoading(true);
            try {
                const res = await fetch(
                    `http://localhost:3000/services?search=${searchTerm}&category=${category}`
                );
                const data = await res.json();
                setServices(data);
            } catch (error) {
                console.error("Error fetching services:", error);
            } finally {
                setDataLoading(false);
            }
        };

        fetchServices();
    }, [searchTerm, category]);

    if (loading || dataLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-dots text-info text-4xl"></span>
            </div>
        );
    }


    return (
        <div className="p-6">

            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
                <input
                    type="text"
                    placeholder="Search by title, category, or company"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="select select-bordered"
                >
                    <option value="All">All Categories</option>
                    <option value="Food Service">Food Service</option>
                    <option value="Bank">Bank</option>
                    <option value="Travel Service">Travel Service</option>
                    <option value="Car Service">Car Service</option>
                </select>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:p-12 gap-5">
                {services.length > 0 ? (
                    services.map((service) => (
                        <SingleService key={service._id} service={service} />
                    ))
                ) : (
                    <div className="text-center col-span-3 text-xl font-semibold text-red-500">
                        No services found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;