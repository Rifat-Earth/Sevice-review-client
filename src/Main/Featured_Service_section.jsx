import React, {  } from 'react';
import { Link } from 'react-router';


const Featured_Service_section = ({ feature }) => {
    console.log(feature)
 
    
    return (
        <>
            <div className="card card-side h-90 w-80 lg:w-50 md:w-60 bg-base-100 shadow-sm mb-5   ">
               
                <div className="card-body">
                     <figure>
                    <img
                        src={feature.photo}
                        alt="photo" className='w-36  rounded-xl  ' />
                </figure>
                    <h2 className="card-title">{feature.title}</h2>
                    <p><span className='text-lg font-bold'>Description:</span> {feature.description}</p>
                    <h2 className="card-title text-center"><span className='font-semibold text-red-600 '>Price:</span>  {feature.price}</h2>
                     <div className="card-actions">
                                           
                                            <Link to={`/detailsService/${feature._id}`}>
                                                <button className="btn   w-full">View Details</button>
                                            </Link>
                                        </div>
                </div>
            </div>
        </>
    );
};

export default Featured_Service_section;