import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Reserve a Table</Link></li>
        <li><Link to="/specials">Specials</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/chicago">Our Story</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
