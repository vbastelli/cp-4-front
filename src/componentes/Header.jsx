import React, { useState } from 'react';
import '../componentes/header.css';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="#">MADEV SPORTS</a>
                </div>
                <button className="navbar-toggler" onClick={toggleMenu}>
                    &#9776;
                </button>
                <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
