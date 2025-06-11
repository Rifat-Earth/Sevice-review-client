import React from 'react';
import { TiSocialFacebookCircular, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                 <Link to="/" className={({ isActive }) => isActive ? "text-pink-400 font-bold" : ""}>Home</Link>
                    <Link to='services' className={({ isActive }) => isActive ? "text-pink-400 font-bold" : ""}>Services</Link>
                  
                   <Link to='/contact' className={({ isActive }) => isActive ? "text-pink-400 font-bold" : ""}>Contact-Us</Link>
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