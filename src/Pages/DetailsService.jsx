import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
// import ReactStars from "react-rating-stars-component";



const DetailsService = () => {

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/reviews?serviceId=${id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [id]);

    const data = useLoaderData();
    console.log(data)
    console.log(id)
    const detailsData = data.find(service => service._id === id);
    console.log(detailsData)
    const { description, category, name, price, title, email, website, date, photo } = detailsData;
    if (!detailsData) {
        return <div className="text-center mt-10 text-red-500">Service not found</div>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const review = {
            serviceId: id,
            rating,
            reviewText,
            reviewerName: user.displayName,
            reviewerPhoto: user.photoURL,
            reviewerEmail: user.email,
        };

        const res = await fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        });

        if (res.ok) {
            // const newReview = await res.json();
            setReviewText('');
            setRating(0);
            // reload reviews:
            fetch(`http://localhost:3000/reviews?serviceId=${id}`)
                .then(res => res.json())
                .then(data => setReviews(data));
        }
    };



    return (
        <div className='mt-12 mb-12'>
            <h1 className='font-bold text-4xl text-blue-700 text-center mb-6'>Service Details Page</h1>
            <div className="w-full   p-6 bg-base-100 shadow rounded grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <img className='lg:w-120 w-96 ml-4 lg:ml-26 h-58 mt-2 rounded-xl' src={photo} alt="photo" />
                </div>
                <div className='ml-4'>
                    <h1 className="text-2xl font-bold mb-2"><span className='text-green-700'>Name:</span> {name}</h1>
                    <p><strong className='text-green-700'>Category:</strong> {category}</p>
                    <p><strong className='text-green-700'>Title:</strong> {title}</p>
                    <p><strong className='text-green-700'>Description:</strong> {description}</p>
                    <p><strong className='text-green-700'>Deadline:</strong> {date}</p>
                    <p><strong className='text-green-700'>Price:</strong> {price}</p>
                    <p><strong className='text-green-700'>Website:</strong> {website}</p>
                    <p><strong className='text-green-700'>Email:</strong> {email}</p>
                </div>
            </div>
            <div className="w-full bg-base-100 mt-8">
                <h2 className="text-2xl text-center font-bold mb-6 text-blue-700">Total Reviews: {reviews.length}</h2>
                {reviews.map((review) => (
                    <div key={review._id} className=" p-2 ml-8 lg:ml-16 mr-5 grid grid-cols-1 lg:grid-cols-6 border-green-700 rounded mb-4">
                        <div className="flex items-center justify-center gap-2">
                            <img src={review.reviewerPhoto} alt="User" className="w-10 border-2 border-green-700 h-10 rounded-full" />
                            <div>
                                <p className="font-semibold justify-center text-green-700">{review.reviewerName}</p>
                                <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <p className="mt-2 justify-center  flex"><strong className='text-green-700'> Rating: </strong>  {review.rating} ⭐</p>
                        <p className="mt-1 justify-center  flex"> <span className='text-green-700'>Review:</span>  {review.reviewText}</p>
                    </div>
                ))}
            </div>
            {/* <h1>{reviews.length}</h1> */}
            {user ? (
                <form onSubmit={handleSubmit} className="w-full mt-8 ">
                    <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Add Your Review</h2>
                    {/* <ReactStars
                        count={5}
                        value={rating}
                        onChange={(newRating) => setRating(newRating)}
                        size={24}
                        isHalf={true}
                        activeColor="#ffd700"
                    /> */}
                   <div className='flex flex-col justify-center'>
                     <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="textarea textarea-bordered border-2 border-green-700 w-10/12 ml-8 lg:ml-32  p-2 mt-3"
                        placeholder="Write your review..."
                        required
                    />
                    <button className="btn w-10/12 ml-8 lg:ml-32  bg-green-700 text-white mt-3" type="submit">Submit Review</button>
                   </div>
                </form>
            ) : (
                <p className="text-center mt-4 text-red-500 font-semibold">Please login to add a review.</p>
            )}
        </div>
    );
};

export default DetailsService;