import React, {useState} from 'react';
import './navbar.css'

const Navbar = () => {
    const[isOpen,  setIsOpen] = useState(false);

    const toggleMenu =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <nav className="navbar">
        <button className='toggle-button'  
         onClick={toggleMenu}>
            {//{isOpen ? "Close menu": "Open Menu"}
            }
    ☰
            {/* Logo Section */}
            <div className="navbar-logo"></div>
             </button>
            {/* Navigation Links */}
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;