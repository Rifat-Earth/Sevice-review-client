import React from 'react';

const PopularServices = () => {

    const services = [
    {
      name: "Car Washing",
      img: "https://i.ibb.co.com/VpV8gZ2z/pexels-koprivakart-3354648.jpg",
      desc: "Professional car cleaning with premium care.",
    },
    {
      name: "Food Delivery",
      img: "https://i.ibb.co.com/1fq4kprR/kai-pilger-t-L92-LY152-Sk-unsplash.jpg",
      desc: "Delicious meals delivered to your doorstep.",
    },
    {
      name: "Travel & Tours",
      img: "https://i.ibb.co.com/B5HV0cw1/chuanyang-chen-Yu-Xc22njq-Tg-unsplash.jpg",
      desc: "Comfortable travel and amazing tour packages.",
    },
    {
      name: "Home Cleaning",
      img: "https://i.ibb.co.com/mVXrwXKT/josue-michel-Fhs-FUo-Wfc0-unsplash.jpg",
      desc: "Reliable home and office cleaning services.",
    },
    {
      name: "Hair and Make Up",
      img: "https://i.ibb.co.com/tMbpPcsc/alan-pope-V8v-E6-Uayc8-M-unsplash.jpg",
      desc: "Get ready with us with few minutes.",
    },
    {
      name: "Flexi plan",
      img: "https://i.ibb.co.com/wFm8yZFs/kelly-sikkema-f-Zz-XB6-RZI2-I-unsplash.jpg",
      desc: "Unlimited Talk time and data plan .",
    },
  ];
    return (
        <div>
              <div className="py-5 bg-base-100">
      <div className="  lg:ml-20 ml-8 p-6 mr-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold m-5">
          Our <span className="text-green-700">Popular Services</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Choose from our most demanded services trusted by customers every day.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg hover:scale-105 transform transition duration-300"
            >
              <figure>
                <img
                  src={service.img}
                  alt={service.name}
                  className="h-40 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <div className="card-actions justify-center mt-3">
                  <button className="btn bg-green-700 btn-sm">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          
        </div>
    );
};

export default PopularServices;