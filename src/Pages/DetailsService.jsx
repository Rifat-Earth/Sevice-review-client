import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const DetailsService = () => {
     const data = useLoaderData();
    console.log(data)
    const {id} = useParams();
    console.log(id)
    const detailsData = data.find(service=> service._id === id);
   console.log(detailsData)
    const { description, category ,name,price,title,email,website,date} = detailsData ;
    return (
         <div className='mt-12 mb-12'>
            <h1 className='font-bold text-2xl text-center mb-2'>Service Details Page</h1>
            <div className="p-6 bg-white shadow rounded w-8/12 p-12 ml-42">
            <h1 className="text-2xl font-bold mb-2">Name: {name}</h1>
            <p><strong>Category:</strong> {category}</p>
             <p><strong>Title:</strong> {title}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Deadline:</strong> {date}</p>
            <p><strong>Budget:</strong> {price}</p>
             <p><strong>Website:</strong> {website}</p>
            <p><strong>Contact Email:</strong> {email}</p>
        </div>
        
        </div>
    );
};

export default DetailsService;