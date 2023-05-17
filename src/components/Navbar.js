import React from 'react';
import '../styles/Navbar.css';

function Navbar({ onLogout }) {
    return (
        <div className="navbar">
            <img
                src="https://i.gyazo.com/d779c6c0633c897dfe3a7201e701a602.png"
                alt="Logo"
                className="navbar-logo"
            />
            <button className="navbar-button">Портфолио</button>
            <button className="navbar-button">Рынки</button>
            <button className="navbar-button">Выйти</button>
        </div>
    );
}

export default Navbar;