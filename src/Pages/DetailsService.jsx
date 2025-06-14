import React, { } from 'react';
import { useLoaderData, useParams } from 'react-router';

const DetailsService = () => {

   
    // const [reviews, setReviews] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:3000/reviews?detailsData=${detailsData._id}`)
    //         .then(res => res.json())
    //         .then(data => setReviews(data));
    // }, [detailsData._id]);

    const data = useLoaderData();
    console.log(data)
    const { id } = useParams();
    console.log(id)
    const detailsData = data.find(service => service._id === id);
    console.log(detailsData)
    const { description, category, name, price, title, email, website, date, photo } = detailsData;
    if (!detailsData) {
        return <div className="text-center mt-10 text-red-500">Service not found</div>;
    }

    

    return (
        <div className='mt-12 mb-12'>
            <h1 className='font-bold text-2xl text-center mb-2'>Service Details Page</h1>
            <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <img className='w-full h-58 mt-2 rounded-lg' src={photo} alt="photo" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">Name: {name}</h1>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Title:</strong> {title}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Deadline:</strong> {date}</p>
                    <p><strong>Price:</strong> {price}</p>
                    <p><strong>Website:</strong> {website}</p>
                    <p><strong>Email:</strong> {email}</p>
                </div>
            </div>
           {/* <h1>{reviews.length}</h1> */}

        </div>
    );
};

export default DetailsService;