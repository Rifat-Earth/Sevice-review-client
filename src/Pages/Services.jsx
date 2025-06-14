import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import SingleService from './SingleService';

const Services = () => {
     useEffect(() => {
                    document.title = "Services | Service-review";
                  }, []);

    const services = useLoaderData();
    const {loading} =useContext(AuthContext)
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
           <span className="loading loading-dots text-info"></span>
        </div>}
    console.log(services)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 p-12 gap-5 mt-4 '>
                {
                    services.map(service=> <SingleService key={service._id} service ={service}></SingleService> )
                }
            </div>
        </div>
    );
};

export default Services;