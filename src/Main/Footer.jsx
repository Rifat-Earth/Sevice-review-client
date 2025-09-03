import React from 'react';
import { TiSocialFacebookCircular, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import { Link, NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
               <ul className=' gap-x-4 md:flex lg:flex'>
                 <li ><NavLink to='/' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ''}>Home</NavLink></li>
                <li ><NavLink to='/services' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Services</NavLink></li>
                <li ><NavLink to='/demos' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Demos</NavLink></li>
                <li ><NavLink to='/features' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Features</NavLink></li>
                <li ><NavLink to='/support' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Support</NavLink></li>
                <li ><NavLink to='/documentation' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Documentation</NavLink></li>
                <li ><NavLink to='/contact' className={({ isActive }) => isActive ? "text-green-400 font-bold" : ""}>Contact-Us</NavLink></li>
               </ul>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a target='_blank' href='https://www.facebook.com/'>
                        <TiSocialFacebookCircular size={36} />
                    </a>
                    <a target='_blank' href='https://x.com/'>
                        <TiSocialTwitter size={36} />
                    </a>
                    <a target='_blank' href='https://www.youtube.com/'>
                        <TiSocialYoutube size={36} />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-red-400'>Serve</span> Company</p>
            </aside>
        </footer>
    );
};

export default Footer;