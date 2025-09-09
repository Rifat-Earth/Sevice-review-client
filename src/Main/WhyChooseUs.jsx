import React from 'react';

const WhyChooseUs = () => {
    const stats = [
        { number: "9+", label: "Service Demos" },
        { number: "100+", label: "Happy Clients" },
        { number: "500+", label: "Reviews Collected" },
        { number: "24/7", label: "Support" },
    ];
    return (
        <div>
            <div className='  ml-20 rounded-xl mr-8 mb-6 '>
                <div className="py-5 bg-base-200">
                    <div className="max-w-6xl mx-auto text-center px-6">
                        {/* Heading */}
                        <h2 className="text-3xl font-bold mb-6">
                            Why <span className="text-green-400">Choose Us?</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                            We provide reliable services with top-rated customer satisfaction.
                            Here’s why thousands of users trust us.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300"
                                >
                                    <h3 className="text-3xl font-extrabold text-green-400">
                                        {item.number}
                                    </h3>
                                    <p className="mt-2 text-gray-700">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs;