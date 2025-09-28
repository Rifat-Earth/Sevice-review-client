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
                    <h2 className="card-title text-center text-blue-700"> {service.category}</h2>
                    <h2 className="card-title text-center"><span className='font-semibold text-green-700'>Title: </span> {service.title}</h2>
                    <p><span className='font-bold text-green-700'>Description: </span> {service.description}</p>
                    <div className="card-actions flex">
                        <h2 className="card-title text-center  mt-2"><span className='font-bold text-green-700 '>Price:</span>  {service.price}</h2>
                        <Link to={`/detailsService/${service._id}`}>
                            <button className="btn ml-12 text-white bg-green-700 border-none rounded-xl ">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleService;