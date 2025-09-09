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
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            user ?
                                <>
                                    <li ><NavLink to='/' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ''}>Home</NavLink></li>
                                    <li ><NavLink to='/services' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Services</NavLink></li>
                                    <li ><NavLink to='/AddService' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ''}>AddService</NavLink></li>
                                    <li ><NavLink to='/MyService' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>MyService</NavLink></li>
                                    <li ><NavLink to='/MyReview' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>MyReview</NavLink></li>
                                    <li ><NavLink to='/demos' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Demos</NavLink></li>
                                    <li ><NavLink to='/features' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Features</NavLink></li>
                                    <li ><NavLink to='/support' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Support</NavLink></li>
                                    <li ><NavLink to='/documentation' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Documentation</NavLink>
                                    
                                    </li>
                                </> :
                                <> <li ><NavLink to='/' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ''}>Home</NavLink></li>
                                    <li ><NavLink to='/services' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>All Services</NavLink></li>


                                    <li ><NavLink to='/demos' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Demos</NavLink></li>
                                    <li ><NavLink to='/features' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Features</NavLink></li>
                                    <li ><NavLink to='/support' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Support</NavLink></li>
                                    <li ><NavLink to='/documentation' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Documentation</NavLink></li>
                                    <li ><NavLink to='/contact' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Contact-Us</NavLink></li>
                                   

                                </>

                        }
                    </ul>
                </div>

                <a className="btn btn-ghost text-xl ml-4"> <span className='text-gray-800'><FaServicestack /></span><span className='text-green-400'><NavLink to='/'>Serve</NavLink></span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        user ?
                            <>
                                <li lassName='text-green-400'><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : 'text-green-400'}>Home</NavLink></li>
                                <li className='text-green-400'><NavLink to='/services' className={({ isActive }) => isActive ? "text-green-400 font-bold" : "text-green-400"}>All Services</NavLink></li>
                                <li className='text-green-400'><NavLink to='/AddService' className={({ isActive }) => isActive ? "text-green-400 font-bold" : 'text-green-400'}>AddServices</NavLink></li>
                                <li lassName='text-green-400'><NavLink to='/MyService' className={({ isActive }) => isActive ? "text-green-400 font-bold" : "text-green-400"}>MyServices</NavLink></li>
                                <li lassName='text-green-400'><NavLink to='/MyReview' className={({ isActive }) => isActive ? "text-green-400 font-bold" : "text-green-400"}>MyReviews</NavLink></li>
                                <li lassName='text-green-400'><NavLink to='/demos' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Demos</NavLink></li>
                                <li className='text-blue-400'><NavLink to='/features' className={({ isActive }) => isActive ? "text-green-400 font-bold" : "text-green-400"}>Features</NavLink></li>
                                <li className='text-green-400'><NavLink to='/support' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-green-400"}>Support</NavLink></li>
                                <li className='text-green-400'><NavLink to='/documentation' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-green-400"}>Documentation</NavLink></li>
                            </> :
                            <> <li className='text-green-400'><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : 'text-green-400'}>Home</NavLink></li>
                                <li className='text-green-400'><NavLink to='/services' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-green-400"}>All Services</NavLink></li>

                                <li className='text-green-400'><NavLink to='/features' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-green-400"}>Features</NavLink></li>
                                <li className='text-green-400'><NavLink to='/support' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-green-400"}>Support</NavLink></li>
                                <li className='text-green-400'><NavLink to='/documentation' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-green-400"}>Documentation</NavLink></li>
                                <li className='text-green-400'><NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-green-400"}>Contact-Us</NavLink></li>
                             
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
                             
                                <img src={user.photoURL} alt="Profile" className="w-7 h-7 rounded-full object-cover" />
                                <span className="hidden group-hover:inline bg-gray-200 text-sm px-2   rounded shadow absolute top-full mt-1">
                                    {user.displayName || "My Profile"}
                                </span>
                            </div>
                            <NavLink onClick={handleLogOut} className={({ isActive }) => isActive ? "text-blue-400 font-bold btn" : "text-green-400"}>Log Out</NavLink></>
                        : <>
                            <div className=' mr-8 flex'>
                               
                                <div className='mr-5'>
                                    <NavLink to='/resister' className={({ isActive }) => isActive ? "text-blue-400  font-bold btn" : 'text-green-400'}>Register</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/SignIn' className={({ isActive }) => isActive ? "text-blue-400 font-bold btn " : "text-green-400"}>SignIn</NavLink>
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;