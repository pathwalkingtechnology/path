// src/components/Navbar.js
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'navbar-sticky' : ''}`}>
      <div className="container">
        <a href="#home" className="navbar-brand">Path</a>
        <ul className="navbar-nav">
          <li><a href="#services">Servicios</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
