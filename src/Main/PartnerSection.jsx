import React from 'react';

const PartnerSection = () => {
    const partners = [
        {
            name: "TechNova Inc.",
            logo: "https://img.icons8.com/color/48/artificial-intelligence.png",
            description: "Provides the core AI technology powering our review analytics.",
        },
        {
            name: "DesignHub",
            logo: "https://img.icons8.com/wired/64/warface-logo.png",
            description: "Led the UI/UX design of the review system for maximum engagement.",
        },
        {
            name: "SecureLayer",
            logo: "https://img.icons8.com/bubbles/100/shield.png",
            description: "Ensures secure data handling and encrypted communication.",
        },
         {
            name: "SecureLayer1",
            logo: "https://img.icons8.com/bubbles/100/shield.png",
            description: "Ensures secure data handling and encrypted communication.",
        },
         {
            name: "SecureLayer2",
            logo: "https://img.icons8.com/bubbles/100/shield.png",
            description: "Ensures secure data handling and encrypted communication.",
        },
         {
            name: "SecureLayer3",
            logo: "https://img.icons8.com/bubbles/100/shield.png",
            description: "Ensures secure data handling and encrypted communication.",
        },
         
    ];
    return (
        <div>
            <section className=" bg-base-100 ">
                <div className=" ml-20 ">
                    <h2 className="text-3xl font-bold text-center m-5">Meet Our Partners</h2>
                    <div className="grid sm:grid-cols-1  md:grid-cols-4 lg:grid-cols-6">
                        {partners.map((partner, index) => (
                            <div key={index} className="card bg-base-200 shadow-xl w-80 lg:w-50 md:w-60 hover:scale-105 transform transition duration-300 ">
                                <figure className="px-10 pt-10">
                                    <img src={partner.logo} alt={partner.name} className="rounded-xl w-16 h-16 object-contain" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h3 className="card-title">{partner.name}</h3>
                                    <p>{partner.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnerSection;