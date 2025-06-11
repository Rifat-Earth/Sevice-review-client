import React from 'react';

const BestTravel = () => {
    return (
        <div>
            <div className='text-3xl font-bold text-center m-5'><h1>Best In Travel Insurance Company</h1></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 container mx-auto px-4 mb-5">

                {/* Company 1 */}
                <div className="card bg-base-100 w-80 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/travel-agency.png" alt="travel-agency"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">TravelSafe</h2>
                        <p className="text-sm text-gray-600 font-bold">Rating: 4.5</p>
                        <div className="card-actions">
                            <button className="btn">Visit Our Site</button>
                        </div>
                    </div>
                </div>
                {/* Company 2 */}
                <div className="card bg-base-100 w-80 shadow-sm">
                    <figure className="px-10 pt-10">
                       <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-travel-agency-travel-agency-flaticons-lineal-color-flat-icons.png" alt="external-travel-agency-travel-agency-flaticons-lineal-color-flat-icons"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">GlobeCover</h2>
                        <p className="text-sm text-gray-600 font-bold">Rating: 4.2</p>
                        <div className="card-actions">
                            <button className="btn ">Visit Our Site</button>
                        </div>
                    </div>
                </div>

                {/* Company 3 */}
                <div className="card bg-base-100 w-80 shadow-sm">
                    <figure className="px-10 pt-10">
                      <img width="64" height="64" src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/external-travel-agency-online-business-photo3ideastudio-flat-photo3ideastudio.png" alt="external-travel-agency-online-business-photo3ideastudio-flat-photo3ideastudio"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ShieldTrip</h2>
                        <p className="text-sm text-gray-600 font-bold">Rating: 4.8</p>
                        <div className="card-actions">
                            <button className="btn ">Visit Our Site</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BestTravel;