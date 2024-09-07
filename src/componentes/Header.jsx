import React, { useState } from 'react';
import Home from "../componentes/Home";
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
                    <img src="./imagens/logo.png" alt="Logo Madev Sports" className="navbar-logo" />
                </div>
                <button className="navbar-toggler" onClick={toggleMenu}>
                    &#9776;
                </button>
                <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#sobrenos">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
                <div className="cart-container">
                    <img src="./imagens/carrinho.png" alt="Carrinho de Compras" className="cart-icon" />
                </div>
            </nav>
        </header>
    );
};

export default Header;
