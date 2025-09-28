import React from 'react';

const CustomerReview = () => {
     const reviews = [
    {
      name: "John Doe",
      photo: "https://i.ibb.co.com/QFhf65xF/portrait-handsome-smiling-stylish-hipster-lambersexual-model-sexy-man-dressed-tshirt-jeans-fashion-m.jpg",
      review: "Amazing service! Everything was quick and professional.",
      rating: 5,
      date: "August 25, 2025",
    },
    {
      name: "Sarah Ali",
      photo: "https://i.ibb.co.com/hFZHZz8g/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w.jpg",
      review: "Food delivery was on time and the quality was great!",
      rating: 4,
      date: "August 28, 2025",
    },
    {
      name: "Michael Lee",
      photo: "https://i.ibb.co.com/Q3V42Mt5/young-joyful-student-man-holding-thumb-up-isolated.jpg",
      review: "Travel service was smooth, loved the experience!",
      rating: 5,
      date: "September 1, 2025",
    },
     {
      name: "Michael Lee",
      photo: "https://i.ibb.co.com/Txv0jxht/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chi.jpg",
      review: "Travel service was smooth, loved the experience!",
      rating: 5,
      date: "September 1, 2025",
    },
    
  ];
    return (
         <div className="bg-base-200 ml-12 p-10 lg:ml-26  rounded-xl py-10 mr-12 mb-5">
      <div className=" text-center  ">
        {/* Heading */}
        <h2 className="text-3xl font-bold mt-5">
          What Our <span className="text-green-700">Customers Say</span>
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
                  className="w-12 h-12 rounded-full border-green-700 border-2"
                />
                <div>
                  <h3 className="font-bold text-green-700">{r.name}</h3>
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