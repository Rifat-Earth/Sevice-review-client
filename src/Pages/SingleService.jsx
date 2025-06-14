import React from 'react';
import { Link } from 'react-router';

const SingleService = ({service}) => {
    return (
         <>
           <div className="card bg-base-100 image-full shadow-sm w-full ">
                <figure>
                    <img
                        src={service.photo}
                        alt="code" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-center"> {service.category}</h2>
                    <h2 className="card-title text-center"><span className='font-semibold text-red-600'>Title: </span> {service.title}</h2>
                    <p><span className='font-semibold text-red-600'>Description: </span> {service.description}</p>
                    <div className="card-actions">
                        <h2 className="card-title text-center mt-2"><span className='font-semibold text-red-600 '>Price:</span>  {service.price}</h2>
                        <Link to={`/detailsService/${service._id}`}>
                            <button className="btn ml-12  w-full">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleService;