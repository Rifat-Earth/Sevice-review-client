import React from 'react';

const BestBank = () => {
    return (
        <div>
            <div className='text-3xl m-5 font-bold text-center'><h1>Best In Bank</h1></div>
            <div className='m-4 ml-4  grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className="card bg-base-100 w-78 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img width="100" height="100" src="https://img.icons8.com/avantgarde/100/bank.png" alt="bank" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Global Finance</h2>
                        <p>International coverage with trusted financial services.</p>
                        <a href="https://www.globalfinance.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
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
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-78 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img width="64" height="64" src="https://img.icons8.com/dusk/64/bank.png" alt="bank"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">SecurePay Bank</h2>
                        <p>Specialized in secure digital payments and fintech support.</p>
                        <a href="https://www.securepaybank.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
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
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-78 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img width="50" height="50" src="https://img.icons8.com/doodle/50/bank.png" alt="bank"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MetroBank</h2>
                        <p>User-friendly banking platform with excellent customer care.</p>
                        <a href="https://www.metrobank.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
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
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestBank;