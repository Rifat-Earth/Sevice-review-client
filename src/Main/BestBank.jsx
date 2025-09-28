import React from 'react';

const BestBank = () => {
    return (
        <div>
            <div className='text-3xl font-bold text-center m-5'>Best<span className='text-green-700'> In Bank</span></div>
            <div className='p-6 ml-8 gap-5 lg:ml-20 bg-base-100 sm:p-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 md:justify-evenly'>
                {/* bank -1 */}
                <div className="card bg-base-200 md:w-60  w-80 lg:w-50 shadow-sm hover:scale-105 transform transition duration-300">
                    <figure className="px-10 pt-10">
                        <img width="100" height="100" src="https://img.icons8.com/avantgarde/100/bank.png" alt="bank" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Global Finance</h2>
                        <p>International coverage with trusted financial services.</p>
                        <a href="https://www.globalfinance.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-sm">
                            Visit Website
                        </a>
                        <div className="rating my-2">
                            <input type="radio" name="rating-global" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-global" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-global" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-global" className="mask mask-star-2 bg-yellow-400" defaultChecked />
                            <input type="radio" name="rating-global" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <div className="card-actions">
                            <button className="btn bg-green-700 text-white">Details</button>
                        </div>
                    </div>
                </div>
                  {/* bank -2 */}
                <div className="card bg-base-200 w-80 md:w-60 lg:w-50 shadow-sm hover:scale-105 transform transition duration-300">
                    <figure className="px-10 pt-10">
                        <img width="64" height="64" src="https://i.ibb.co.com/5hwx3C4L/50-money-hand.jpg" alt="bank"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Modern Bank</h2>
                        <p>Specialized in secure digital payments and fintech support.</p>
                        <a href="https://www.securepaybank.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-sm">
                            Visit Website
                        </a>
                        <div className="rating my-2">
                            <input type="radio" name="rating-stat" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-star" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-star" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-star" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-star" className="mask mask-star-2 bg-yellow-400" defaultChecked/>
                        </div>
                        <div className="card-actions">
                            <button className="btn bg-green-700 text-white">Details</button>
                        </div>
                    </div>
                </div>
                {/* bank-4 */}
                 <div className="card bg-base-200 w-80 md:w-60 lg:w-50 shadow-sm hover:scale-105 transform transition duration-300">
                    <figure className="px-10 pt-10">
                        <img width="64" height="64" src="https://img.icons8.com/dusk/64/bank.png" alt="bank"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">SecurePay Bank</h2>
                        <p>Specialized in secure digital payments and fintech support.</p>
                        <a href="https://www.securepaybank.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-sm">
                            Visit Website
                        </a>
                        <div className="rating my-2">
                            <input type="radio" name="rating-pay" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-pay" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-pay" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-pay" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-pay" className="mask mask-star-2 bg-yellow-400" defaultChecked/>
                        </div>
                        <div className="card-actions">
                            <button className="btn bg-green-700 text-white">Details</button>
                        </div>
                    </div>
                </div>
              
                {/* bank-5 */}
                 <div className="card bg-base-200 w-80 md:w-60 lg:w-50 shadow-sm hover:scale-105 transform transition duration-300">
                    <figure className="px-10 pt-10">
                        <img width="64" height="64" src="https://i.ibb.co.com/kgGYb2YD/57-human-money.jpg" alt="bank"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Secure Bank</h2>
                        <p>Specialized in secure digital payments and fintech support.</p>
                        <a href="https://www.securepaybank.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-sm">
                            Visit Website
                        </a>
                        <div className="rating my-2">
                            <input type="radio" name="rating-secure" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-secure" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-secure" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-secure" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-secure" className="mask mask-star-2 bg-yellow-400" defaultChecked/>
                        </div>
                        <div className="card-actions">
                            <button className="btn bg-green-700 text-white">Details</button>
                        </div>
                    </div>
                </div>
                {/* bank-6 */}
                 <div className="card bg-base-200 md:w-60 w-80 lg:w-50 shadow-sm hover:scale-105 transform transition duration-300">
                    <figure className="px-10 pt-10">
                        <img width="64" height="64" src="https://i.ibb.co.com/kgGYb2YD/57-human-money.jpg" alt="bank"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pay Bank</h2>
                        <p>Specialized in secure digital payments and fintech support.</p>
                        <a href="https://www.securepaybank.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-sm">
                            Visit Website
                        </a>
                        <div className="rating my-2">
                            <input type="radio" name="rating-securepay" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-securepay" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-securepay" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-securepay" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-securepay" className="mask mask-star-2 bg-yellow-400" defaultChecked/>
                        </div>
                        <div className="card-actions">
                            <button className="btn bg-green-700 text-white">Details</button>
                        </div>
                    </div>
                </div>
               {/* bank -3 */}
                <div className="card bg-base-200 md:w-60 w-80 lg:w-50 shadow-sm hover:scale-105 transform transition duration-300">
                    <figure className="px-10 pt-10">
                        <img width="50" height="50" src="https://img.icons8.com/doodle/50/bank.png" alt="bank"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MetroBank</h2>
                        <p>User-friendly banking platform with excellent customer care.</p>
                        <a href="https://www.metrobank.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-sm">
                            Visit Website
                        </a>
                        <div className="rating my-2">
                            <input type="radio" name="rating-metro" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-metro" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-metro" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-metro" className="mask mask-star-2 bg-yellow-400" defaultChecked />
                            <input type="radio" name="rating-metro" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <div className="card-actions">
                            <button className="btn bg-green-700 text-white">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestBank;