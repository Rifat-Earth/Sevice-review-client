
import React from 'react';
import { Link } from 'react-router';
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (

        <div className='flex flex-col md:flex-row items-center justify-between p-6 lg:ml-20 lg:mr-10 gap-10 mt-10 '>
            <div className='max-w-lg '>
                <h2 className="text-5xl font-bold leading-snug">
                    <span className="text-blue-500">Keep Exploring</span> <br />

                  
                        <span className="text-green-500 block">
                            <Typewriter
                                words={[
                                    "And Accept Our Services",
                                    "Explore Trusted Reviews",
                                    "Share Your Experience",
                                ]}
                                loop={0} 
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={60}
                                delaySpeed={1500}
                            />
                       
                    </span>
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                    Discover top-rated services with trusted reviews from real users.
                </p>
                <Link to='/services'> <button className="btn btn-primary mt-6">Explore Services</button></Link>
            </div>
            <div className="carousel  w-full md:w-7/12 rounded-2xl shadow-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/C3BvbCj2/pexels-ivan-samkov-7621136.jpg"
                        className="w-full " />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/84mrwRfF/pexels-maltelu-2244746.jpg"
                        className="w-full " />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">

                    <img
                        src="https://i.ibb.co/TMfznP22/pexels-pixabay-50987.jpg"
                        className="w-full " />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/MyVtJwGX/pexels-elletakesphotos-2696064.jpg"
                        className="w-full " />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;