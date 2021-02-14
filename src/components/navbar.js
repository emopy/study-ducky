import React from 'react';
import { Link } from 'react-router-dom';

import './styles/navbar.css'

import logoImg from '../assets/logo.png'

export default function Navbar() {

    return (
    <ul className="navbar">
        <li className="navbar-left-link"><Link to="/"><img src={logoImg} style={{height: '100%'}}/></Link></li>
        <li className="navbar-right-link"><Link to="/upload">Upload</Link></li>
        <li className="navbar-right-link"><Link to="/explore">Explore</Link></li>
    </ul>
    );

}


