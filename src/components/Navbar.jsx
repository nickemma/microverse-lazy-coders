/* eslint-disable */
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { links } from '../data';
import Logo from '../images/logo1.png';
import './Navbar.css';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleClick = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <nav>
      <div className="container navbar">
        <Link to="/" className="logo">
          <img src={Logo} alt="nav logo" />
        </Link>
        <ul className={`nav-links ${isNavOpen ? 'show-nav' : 'hide-nav'}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active-tab' : '')}
                  onClick={handleClick}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button type="button" className="btn-toggle" onClick={handleClick}>
          {isNavOpen ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
