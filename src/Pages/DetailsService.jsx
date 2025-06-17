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
            <div className="max-w-4xl mx-auto mt-8">
                <h2 className="text-xl font-bold mb-2">Total Reviews: {reviews.length}</h2>
                {reviews.map((review) => (
                    <div key={review._id} className="border p-4 rounded mb-4">
                        <div className="flex items-center gap-2">
                            <img src={review.reviewerPhoto} alt="User" className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-semibold">{review.reviewerName}</p>
                                <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <p className="mt-2"><strong>Rating:</strong> {review.rating}⭐</p>
                        <p className="mt-1">{review.reviewText}</p>
                    </div>
                ))}
            </div>
            {/* <h1>{reviews.length}</h1> */}
            {user ? (
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8">
                    <h2 className="text-xl font-bold mb-2">Add Your Review</h2>
                    {/* <ReactStars
                        count={5}
                        value={rating}
                        onChange={(newRating) => setRating(newRating)}
                        size={24}
                        isHalf={true}
                        activeColor="#ffd700"
                    /> */}
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="textarea textarea-bordered w-full mt-3"
                        placeholder="Write your review..."
                        required
                    />
                    <button className="btn btn-info mt-3" type="submit">Submit Review</button>
                </form>
            ) : (
                <p className="text-center mt-4 text-red-500 font-semibold">Please login to add a review.</p>
            )}
        </div>
    );
};

export default DetailsService;