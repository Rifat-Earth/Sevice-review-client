import React, { use } from 'react';
import { FaServicestack } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOutUser } = use(AuthContext)

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

    console.log(user)
    return (
        <div className="navbar bg-base-100 shadow-sm">
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
                                </> :
                                <> <li ><NavLink to='/' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ''}>Home</NavLink></li>
                                    <li ><NavLink to='/services' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Services</NavLink></li>
                                    <li ><NavLink to='/contact' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Contact-Us</NavLink></li>

                                </>

                        }
                    </ul>
                </div>

                <a className="btn btn-ghost text-xl"> <FaServicestack /><span className='text-red-400'>Serve</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        user ?
                            <>
                                <li ><NavLink to='/' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ''}>Home</NavLink></li>
                                <li ><NavLink to='/services' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Services</NavLink></li>
                                <li ><NavLink to='/AddService' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ''}>AddService</NavLink></li>
                                <li ><NavLink to='/MyService' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>MyService</NavLink></li>
                                <li ><NavLink to='/MyReview' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>MyReview</NavLink></li>
                            </> :
                            <> <li ><NavLink to='/' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ''}>Home</NavLink></li>
                                <li ><NavLink to='/services' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Services</NavLink></li>
                                <li ><NavLink to='/contact' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Contact-Us</NavLink></li>

                            </>

                    }

                </ul>
            </div>
            <div className="navbar-end gap-5">
                {
                    user ?
                        <>
                            <div className="group relative flex items-center gap-2 cursor-pointer">
                                <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                                <span className="hidden group-hover:inline bg-gray-200 text-lg px-2 py-1  rounded shadow absolute top-full mt-1">
                                    {user.displayName || "My Profile"}
                                </span>
                            </div>
                            <NavLink onClick={handleLogOut} className={({ isActive }) => isActive ? "text-green-400 font-bold btn" : ""}>Log Out</NavLink></>
                        : <>
                            <NavLink to='/resister' className={({ isActive }) => isActive ? "text-green-400 font-bold btn" : ""}>Register</NavLink>
                            <NavLink to='/SignIn' className={({ isActive }) => isActive ? "text-green-400 font-bold btn" : ""}>SignIn</NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;