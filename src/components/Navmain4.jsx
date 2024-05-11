import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bell from '../assets/bell.png';
import red from '../assets/green.jpg';

const Navmain = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
return (
    <>
    <nav className='navmain' style={{ zIndex: 1 }}>
    <div className="left-side">
                    {/* Hamburger Menu Icon (for smaller screens) */}
                    <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>

                    </div>
                    {/* Logo */}
                    <div className="logo-container2" style={{ color: 'white', height: '35px', marginLeft: '15px' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" onClick={() => { navigate(`/`) }} />
                    </div>
                    {/* Regular Navigation Links (for larger screens) */}
                    <div className="nav-links">
                        <a>Home</a>
                        <a>TV Shows</a>
                        <a>Movies</a>
                        <a>New & Popular</a>
                        <a>My List</a>
                    </div>
                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="mobile-menu">
                            <a onClick={() => { navigate(`/`) }}>Home</a>
                            <a>TV Shows</a>
                            <a>Movies</a>
                            <a>New & Popular</a>
                            <a>My List</a>
                        </div>
                    )}
                </div>
        {/* Right side */}
        <div className="right-side" style={{marginLeft: '25px'}}>
        <div className="search-bar">
            <img
            src="https://icon-library.com/images/search-icon-white-png/search-icon-white-png-18.jpg"
            alt="Search"
            />
        </div>
        <div className="search-bar">
            <img
            src={bell}
            alt="notifications"
            />
        </div>
        <div className="profile-dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <img
            src={red}
            alt="Profile"
            />
            {isDropdownOpen && (
            <div className="dropdown-content">
                <a onClick={() => { navigate(`/profiles`)}}>Profiles</a>
                <a onClick={() => { navigate(`/signin`)}}>Logout</a>
            </div>
            )}
        </div>
        </div>
    </nav>
    </>
);
};

export default Navmain;
