import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { TiSocialFacebookCircular, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import { Link, NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-green-100 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
               <ul className=' gap-x-4 md:flex lg:flex'>
                 <li className='text-green-400'><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : ''}>Home</NavLink></li>
                <li className='text-green-400'><NavLink to='/services' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : ""}>Services</NavLink></li>
                <li className='text-green-400'><NavLink to='/demos' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : ""}>Demos</NavLink></li>
                <li className='text-green-400'><NavLink to='/features' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : ""}>Features</NavLink></li>
                <li className='text-green-400'><NavLink to='/support' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : ""}>Support</NavLink></li>
                <li className='text-green-400'><NavLink to='/documentation' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : ""}>Documentation</NavLink></li>
                <li className='text-green-400'><NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-400 font-bold" : ""}>Contact-Us</NavLink></li>
               </ul>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className='text-gray-700' target='_blank' href='https://www.facebook.com/'>
                        <FaFacebook size={36} className=" cursor-pointer hover:text-green-400 transition"/>
                    </a>
                    <a  className='text-gray-700' target='_blank' href='https://x.com/'>
                        <TiSocialTwitter size={36} className=" cursor-pointer hover:text-green-400 transition"/>
                    </a>
                    <a className='text-gray-700' target='_blank' href='https://www.youtube.com/'>
                        <TiSocialYoutube size={36} className=" cursor-pointer hover:text-green-400 transition"/>
                    </a>
                </div>
            </nav>
            <aside>
                <p className='text-gray-700'>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-red-400'>Serve</span> Company</p>
            </aside>
        </footer>
    );
};

export default Footer;