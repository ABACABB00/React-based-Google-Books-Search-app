import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };


    return (
        <nav>
            <i className="fa fa-book fa-3x"></i>
            <h3>Search for Books</h3>
            <ul className="nav-links">
               <Link style={navStyle} to="/search">
                    <li>Search</li>
               </Link>
               <Link  style={navStyle} to="/shop">
                   <li>Shop</li>
               </Link>
            </ul>
        </nav>
    )
}

export default Nav;