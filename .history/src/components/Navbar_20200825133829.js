/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
 
const Navbar = () =>{
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar