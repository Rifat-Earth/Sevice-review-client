import React, { use, useEffect } from 'react';
import { FaServicestack } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { user, logOutUser } = use(AuthContext)
    useEffect(() => {
        document.title = "Navbar | Service-review";
    }, []);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    title: "logged Out",
                    icon: "success",
                    draggable: true
                });
                console.log('sign out')
                    .catch(error => {
                        console.log(error)
                    })
            })
    }

    // console.log(user)
    return (
        <div className="navbar bg-green-100 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost bg-gray-700 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            user ?
                                <>
                                    <li ><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : 'text-green-700'}>Home</NavLink></li>
                                    <li ><NavLink to='/services' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Services</NavLink></li>
                                    <li ><NavLink to='/AddService' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : 'text-green-700'}>AddService</NavLink></li>
                                    <li ><NavLink to='/MyService' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>MyService</NavLink></li>
                                    <li ><NavLink to='/MyReview' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>MyReview</NavLink></li>
                                    <li ><NavLink to='/demos' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Demos</NavLink></li>
                                    <li ><NavLink to='/features' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Features</NavLink></li>
                                    <li ><NavLink to='/support' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Support</NavLink></li>
                                    <li ><NavLink to='/documentation' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Documentation</NavLink>
                                    
                                    </li>
                                </> :
                                <> <li ><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : 'text-green-700'}>Home</NavLink></li>
                                    <li ><NavLink to='/services' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>All Services</NavLink></li>


                                    <li ><NavLink to='/demos' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Demos</NavLink></li>
                                    <li ><NavLink to='/features' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Features</NavLink></li>
                                    <li ><NavLink to='/support' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Support</NavLink></li>
                                    <li ><NavLink to='/documentation' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Documentation</NavLink></li>
                                    <li ><NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Contact-Us</NavLink></li>
                                   

                                </>

                        }
                    </ul>
                </div>

                <p className="btn btn-ghost text-xl ml-4"> <span className='text-gray-800'><FaServicestack /></span><span className='text-green-700'><NavLink to='/'>Serve</NavLink></span></p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        user ?
                            <>
                                <li className='text-green-800'><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : 'text-green-800'}>Home</NavLink></li>
                                <li className='text-green-700'><NavLink to='/services' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>All Services</NavLink></li>
                                <li className='text-green-700'><NavLink to='/AddService' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : 'text-green-700'}>AddServices</NavLink></li>
                                <li className='text-green-700'><NavLink to='/MyService' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>MyServices</NavLink></li>
                                <li className='text-green-700'><NavLink to='/MyReview' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>MyReviews</NavLink></li>
                                <li className='text-green-700'><NavLink to='/demos' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : ""}>Demos</NavLink></li>
                                <li className='text-green-700'><NavLink to='/features' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Features</NavLink></li>
                                <li className='text-green-700'><NavLink to='/support' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Support</NavLink></li>
                                <li className='text-green-700'><NavLink to='/documentation' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Documentation</NavLink></li>
                            </> :
                            <> <li className='text-green-700'><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : 'text-green-700'}>Home</NavLink></li>
                                <li className='text-green-700'><NavLink to='/services' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>All Services</NavLink></li>

                                <li className='text-green-700'><NavLink to='/features' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Features</NavLink></li>
                                <li className='text-green-700'><NavLink to='/support' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : ""}>Support</NavLink></li>
                                <li className='text-green-700'><NavLink to='/documentation' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Documentation</NavLink></li>
                                <li className='text-green-700'><NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-green-700"}>Contact-Us</NavLink></li>
                             
                            </>

                    }

                </ul>
            </div>
            <div className="navbar-end gap-5">
                 <ThemeToggle />
                {
                    user ?
                        <>
                            <div className="group relative flex items-center gap-2 cursor-pointer">
                             
                                <img src={user?.photoURL || "/logo/user.png"} className="w-7 h-7 rounded-full object-cover border-2 border-green-700 " />
                                <span className="hidden group-hover:inline bg-gray-800 text-sm px-2   rounded shadow absolute top-full mt-1">
                                    {user?.displayName || "My Profile"}
                                </span>
                            </div>
                            <NavLink onClick={handleLogOut} className={({ isActive }) => isActive ? "text-green-700 mr-5 font-bold btn border-2 border-green-700" : "0"}>Log Out</NavLink></>
                        : <>
                            <div className=' mr-8 flex'>
                               
                                <div className='mr-5'>
                                    <NavLink to='/resister' className={({ isActive }) => isActive ? "text-blue-700  font-bold btn" : 'text-green-700'}>Register</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/SignIn' className={({ isActive }) => isActive ? "text-blue-700 font-bold btn " : "text-green-700"}>SignIn</NavLink>
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;