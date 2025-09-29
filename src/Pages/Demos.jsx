import React from 'react';

const Demos = () => {
    return (
        <div>
            <section className="max-w-5xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-6">🎥 Live Demos</h1>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="Demo Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 text-center">
                    <h2 className="font-semibold mb-2">🔍 Search & Filter</h2>
                    <img src="/public/Screenshot (73).png" alt="Search Demo" className="rounded" />
                    <p className="text-sm text-gray-500 mt-2">Quickly find what you need.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 text-center">
                    <h2 className="font-semibold mb-2">⭐ Reviews</h2>
                    <img src="/public/Screenshot (74).png" alt="Reviews Demo" className="rounded" />
                    <p className="text-sm text-gray-500 mt-2">See customer feedback instantly.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 text-center">
                    <h2 className="font-semibold mb-2">📱 Responsive</h2>
                    <img src="/public/Screenshot (75).png" alt="Mobile Demo" className="rounded" />
                    <p className="text-sm text-gray-500 mt-2">Works on all devices.</p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">⚡ Try it Live</h2>
                <iframe
                    src="https://codesandbox.io/embed/YOUR_SANDBOX_ID?fontsize=14&hidenavigation=1&theme=dark"
                    className="w-full h-[500px] rounded-lg shadow-lg"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </section>


        </div>
    );
};

export default Demos;