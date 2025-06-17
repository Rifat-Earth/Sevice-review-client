import React, {  } from 'react';
import { Link } from 'react-router';


const Featured_Service_section = ({ feature }) => {
    console.log(feature)
 
    
    return (
        <>
            <div className="card card-side bg-base-100 shadow-sm h-72 m-4 p-4">
                <figure>
                    <img
                        src={feature.photo}
                        alt="photo" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{feature.title}</h2>
                    <p><span className='text-lg '>Description:</span> {feature.description}</p>
                   
                     <div className="card-actions">
                                            <h2 className="card-title text-center"><span className='font-semibold text-red-600 '>Price:</span>  {feature.price}</h2>
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