import React from 'react';

const BestTravel = () => {
    return (
        <div>
            <div className='text-3xl font-bold text-center m-5'><h1>Best In Travel <span className='text-green-700'>Insurance Company</span> </h1></div>
            <div className="grid p-6 ml-8 bg-base-100 grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5  lg:ml-20 mb-5">

                {/* Company 1 */}
                <div className="card bg-base-200 lg:w-50 w-80 shadow-sm hover:scale-105 transform transition duration-300">
                    <figure className="px-10 pt-10">
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/travel-agency.png" alt="travel-agency"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">TravelSafe</h2>
                        <p className="text-sm text-gray-600 font-bold">Rating: 4.5</p>
                        <div className="card-actions">
                            <button className="btn bg-green-700 text-white">Visit Our Site</button>
                        </div>
                    </div>
                </div>
                {/* Company 2 */}
                <div className="card bg-base-200 lg:w-50 w-80 shadow-sm hover:scale-105 transform transition duration-300">
                    <figure className="px-10 pt-10">
                       <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-travel-agency-travel-agency-flaticons-lineal-color-flat-icons.png" alt="external-travel-agency-travel-agency-flaticons-lineal-color-flat-icons"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">GlobeCover</h2>
                        <p className="text-sm text-gray-600 font-bold">Rating: 4.2</p>
                        <div className="card-actions">
                            <button className="btn bg-green-700 text-white">Visit Our Site</button>
                        </div>
                    </div>
                </div>
                {/* company-4 */}
                   <div className="card bg-base-200 lg:w-50 w-80 shadow-sm hover:scale-105 transform transition duration-300">
                    <figure className="px-10 pt-10">
                       <img width="64" height="64" src="https://i.ibb.co.com/DgsGYdDd/4135126.jpg" alt="external-travel-agency-travel-agency-flaticons-lineal-color-flat-icons"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Safe</h2>
                        <p className="text-sm text-gray-600 font-bold">Rating: 4.1</p>
                        <div className="card-actions">
                            <button className="btn bg-green-700 text-white">Visit Our Site</button>
                        </div>
                    </div>
                </div>
                {/* company-5 */}
                 <div className="card bg-base-200 lg:w-50 w-80 shadow-sm hover:scale-105 transform transition duration-300">
                    <figure className="px-10 pt-10">
                       <img width="64" height="64" src="https://i.ibb.co.com/67SLK748/4174409.jpg" alt="external-travel-agency-travel-agency-flaticons-lineal-color-flat-icons"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">TravelBangla</h2>
                        <p className="text-sm text-gray-600 font-bold">Rating: 4.4</p>
                        <div className="card-actions">
                            <button className="btn bg-green-700 text-white">Visit Our Site</button>
                        </div>
                    </div>
                </div>
                {/* company-6 */}
                 <div className="card bg-base-200 lg:w-50 w-80 shadow-sm hover:scale-105 transform transition duration-300">
                    <figure className="px-10 pt-10">
                       <img width="64" height="64" src="https://i.ibb.co.com/C5LpQj5q/4194093.jpg" alt="external-travel-agency-travel-agency-flaticons-lineal-color-flat-icons"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">SweetTravel</h2>
                        <p className="text-sm text-gray-600 font-bold">Rating: 4.3</p>
                        <div className="card-actions">
                            <button className="btn bg-green-700 text-white">Visit Our Site</button>
                        </div>
                    </div>
                </div>
                {/* Company 3 */}
                <div className="card bg-base-200 lg:w-50 w-80 shadow-sm hover:scale-105 transform transition duration-300">
                    <figure className="px-10 pt-10">
                      <img width="64" height="64" src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/external-travel-agency-online-business-photo3ideastudio-flat-photo3ideastudio.png" alt="external-travel-agency-online-business-photo3ideastudio-flat-photo3ideastudio"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ShieldTrip</h2>
                        <p className="text-sm text-gray-600 font-bold">Rating: 4.8</p>
                        <div className="card-actions">
                            <button className="btn bg-green-700 text-white">Visit Our Site</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BestTravel;