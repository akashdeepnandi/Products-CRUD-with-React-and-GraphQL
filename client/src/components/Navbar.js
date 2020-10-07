import React from "react";
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue white-text">
        <a href="#!" className="brand-logo" style={{ marginLeft: '1.5rem' }}>
          Products CRUD
        </a>
				<ul className="right hide-on-med-and-down" style={{ marginRight: '1rem' }}>
					<li><NavLink to='/'>Home</NavLink></li>
					<li><NavLink to='/product-list'>Product List</NavLink></li>
				</ul>
      </div>
    </nav>
  );
};


export default Navbar;
