import React, {  } from 'react';
import { Link } from 'react-router';


const Featured_Service_section = ({ feature }) => {
    console.log(feature)
 
    
    return (
        <>
            <div className="card bg-base-200 card-side h-90 w-80 lg:w-50 md:w-60 shadow-sm mb-5 hover:scale-105 transform transition duration-300   ">
               
                <div className="card-body overflow-x-hidden">
                     <figure>
                    <img
                        src={feature.photo}
                        alt="photo" className='w-36 mr-30  rounded-xl  ' />
                </figure>
                    <h2 className="card-title">{feature.title}</h2>
                    <p className='text-lg '>Description:<span className='text-sm '> {feature.description}</span></p>
                    <h2 className="card-title text-center"><span className='font-semibold text-red-600 '>Price:</span>  {feature.price}</h2>
                     <div className="card-actions">
                                           
                                            <Link to={`/detailsService/${feature._id}`}>
                                                <button className="btn bg-green-700  w-full">View Details</button>
                                            </Link>
                                        </div>
                </div>
            </div>
        </>
    );
};

export default Featured_Service_section;