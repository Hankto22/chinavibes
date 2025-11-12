import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import logo from '../assets/Red-Crowned Crane-logo.jpeg';
const NavBar: React.FC = () => {

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Sourcing Guide', path: '/sourcing' },
    { name: 'China Trips', path: '/trips' },
    { name: 'Fees', path: '/fees' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* logo */}
        <div className='navbar-brand'>
         <div className="logo-icon">
               <img src={logo} alt="Logo" />
                  </div>
          <p>Red Crane Trading Co.</p>
        </div>
        {/* navigation */}
        <div className='navbar-menu'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className='navbar-link'
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* login btn */}
        <div className='navbar-actions'>
          <Link to="/login" className='login-btn'>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;