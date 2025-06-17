import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
 
  const handleToggle = () => {
    setToggle(!toggle);
  };
 
  return (
    <nav className="navbar navbar-expand-lg bg-success fixed-top" data-bs-theme="light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Yashasvi's Portfolio</a>
 
        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={toggle ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
 
        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${toggle ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleToggle}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={handleToggle}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={handleToggle}>Contact</Link> {/* Fixed spelling */}
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link" onClick={handleToggle}>Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 