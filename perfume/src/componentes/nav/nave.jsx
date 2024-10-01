import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nave.css'; // Import your styles here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
      <h1>Perfume</h1>
      <ul className="nav-buttons">
        <li className="center-button"><a href="#contact" className="button">Contact</a></li>
        <li className="dropdown">
          <button className="button dropdown-button" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faUser} /> User <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/signup" className="dropdown-item">Signup</Link></li>
              <li><Link to="/login" className="dropdown-item">Login</Link></li>
            </ul>
          )}
        </li>
        {/* Connect About Us page here */}
        <li><Link to="/about" className="button">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
