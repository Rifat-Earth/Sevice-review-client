import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; 

const MyReviews = () => {
  const { user } = useContext(AuthContext); 
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (user?.email) {
      
        fetch(`http://localhost:3000/reviews/${user.email}`,{
             method: 'GET',
             headers: { 'user-email': user.email,
                'Content-Type': 'application/json',
             }
        })
        .then((res) => res.json())
        .then((data)=> {
          setReviews(data);
        })
        .catch((err) => {
          console.error("Error fetching reviews:", err);
        });
    }
  }, [user?.email]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">📝 My Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* Table Head */}
            <thead>
              <tr className="bg-base-200">
                <th>Reviewer</th>
                <th>Email</th>
                <th>Review</th>
                <th>Rating</th>
                <th>Date</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id}>
                  <td className="flex items-center gap-2">
                    <img
                      src={review.reviewerPhoto}
                      alt="Reviewer"
                      className="w-10 h-10 rounded-full"
                    />
                    {review.reviewerName}
                  </td>
                  <td>{review.reviewerEmail}</td>
                  <td className="max-w-xs truncate">{review.reviewText}</td>
                  <td>
                    <span className="text-yellow-500 font-bold">
                      {review.rating} ⭐
                    </span>
                  </td>
                  <td>{new Date(review.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default MyReviews;
