import React from 'react';

const CustomerReview = () => {
     const reviews = [
    {
      name: "John Doe",
      photo: "https://i.ibb.co/6FgGq1p/avatar1.png",
      review: "Amazing service! Everything was quick and professional.",
      rating: 5,
      date: "August 25, 2025",
    },
    {
      name: "Sarah Ali",
      photo: "https://i.ibb.co/GHCFj4m/avatar2.png",
      review: "Food delivery was on time and the quality was great!",
      rating: 4,
      date: "August 28, 2025",
    },
    {
      name: "Michael Lee",
      photo: "https://i.ibb.co/DgFk0Kv/avatar3.png",
      review: "Travel service was smooth, loved the experience!",
      rating: 5,
      date: "September 1, 2025",
    },
     {
      name: "Michael Lee",
      photo: "https://i.ibb.co/DgFk0Kv/avatar3.png",
      review: "Travel service was smooth, loved the experience!",
      rating: 5,
      date: "September 1, 2025",
    },
    
  ];
    return (
         <div className="bg-base-200  ml-20  rounded-xl py-10 mr-8">
      <div className=" max-w-6xl mx-auto text-center px-6 ">
        {/* Heading */}
        <h2 className="text-3xl font-bold mt-5">
          What Our <span className="text-green-400">Customers Say</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Real reviews from our happy customers about their experiences.
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4  gap-8">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-left hover:scale-105 transition duration-300"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={r.photo}
                  alt={r.name}
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <h3 className="font-semibold text-gray-500">{r.name}</h3>
                  <p className="text-sm text-gray-500">{r.date}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 italic">"{r.review}"</p>

              {/* Rating */}
              <div className="flex mt-4 text-yellow-400">
                {/* {Array(r.rating)
                  .fill()
                  .map((_, i) => (
                    <Star key={i} size={18} fill="gold" /> */}
                  {/* ))} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default CustomerReview;