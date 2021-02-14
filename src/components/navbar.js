import React from 'react';

import './styles/navbar.css'

import logoImg from '../assets/logo.png'

export default function Navbar() {

    return (
    <ul className="navbar">
        <li className="navbar-left-link"><a href="/"><img src={logoImg} style={{height: '100%'}}/></a></li>
        <li className="navbar-right-link"><a href="/upload">Upload</a></li>
        <li className="navbar-right-link"><a href="/explore">Explore</a></li>
    </ul>
    );
    
}


