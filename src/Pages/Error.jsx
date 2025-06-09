import React from 'react';

const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-base-200">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-error">404</h1>
                <h2 className="text-2xl md:text-4xl font-semibold text-base-content mt-4">
                    Page Not Found
                </h2>
                <p className="mt-2 text-base-content/70">
                    Sorry, the page you are looking for does not exist.
                </p>
                <a href="/" className="mt-6 inline-block">
                    <button className="btn btn-primary">Go Home</button>
                </a>
            </div>
        </div>
    );
};

export default Error;