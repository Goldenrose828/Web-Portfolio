import React from "react";
import { Link } from "react-router-dom";
import logo from '../imgs/logo2.svg';
import './navbar.css';

const Navbar = () =>{
    return(
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" /> 
                    </Link>
                </div>
                <ul className="navbar-links">
                    <li>
                        <Link to="../pages/home">Home</Link>
                    </li>
                    <li>
                        <Link to="../pages/About">About</Link>
                    </li>
                    <li>
                        <Link to="../pages/Project">Projects</Link>
                    </li>
                    <li>
                        <Link to="../pages/Service">Service</Link>
                    </li>
                    <li>
                        <Link to="../pages/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>

        </>
    );
};

export default Navbar;

