import React from 'react';
import './App.css';
import { Link  } from 'react-router-dom';

const navStyle = {
    color: 'white',
    marginRight: '20px',
    textDecoration: 'none'
}



function Nav ()  {


    return (
        <nav>
            <i className="fa fa-book fa-4x"></i>
            <h1>Search for Books</h1>
            <ul className="nav-links">
               <Link style={navStyle} to="/search">
                    <li>Search</li>
               </Link>
               <Link  style={navStyle} to="/save">
                   <li>Save</li>
               </Link>
            </ul>
        </nav>
    )
}

export default Nav;