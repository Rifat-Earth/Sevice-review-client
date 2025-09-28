import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { TiSocialFacebookCircular, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import { Link, NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center sticky  bg-green-100 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
               <ul className=' gap-x-4 md:flex lg:flex'>
                 <li className='text-green-700'><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : ''}>Home</NavLink></li>
                <li className='text-green-700'><NavLink to='/services' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : ""}>Services</NavLink></li>
                <li className='text-green-700'><NavLink to='/demos' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : ""}>Demos</NavLink></li>
                <li className='text-green-700'><NavLink to='/features' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : ""}>Features</NavLink></li>
                <li className='text-green-700'><NavLink to='/support' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : ""}>Support</NavLink></li>
                <li className='text-green-700'><NavLink to='/documentation' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : ""}>Documentation</NavLink></li>
                <li className='text-green-700'><NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-700 font-bold" : ""}>Contact-Us</NavLink></li>
               </ul>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className='text-gray-700' target='_blank' href='https://www.facebook.com/'>
                        <FaFacebook size={36} className=" cursor-pointer hover:text-blue-500 transition"/>
                    </a>
                    <a  className='text-gray-700' target='_blank' href='https://x.com/'>
                        <TiSocialTwitter size={36} className=" cursor-pointer hover:text-blue-400 transition"/>
                    </a>
                    <a className='text-gray-700' target='_blank' href='https://www.youtube.com/'>
                        <TiSocialYoutube size={36} className=" cursor-pointer hover:text-red-600 transition"/>
                    </a>
                </div>
            </nav>
            <aside>
                <p className='text-gray-700'>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-green-700'>Serve</span> Company</p>
            </aside>
        </footer>
    );
};

export default Footer;