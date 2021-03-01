import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
        <h1 className="main-header">IPL Auction 2021</h1>
        <nav>
        <a href="/shop">Players</a>
        <a href="/review">Selected Players</a>
        <a href="/manage">Manage Selected Players</a>
        </nav>
        </div>
    );
};

export default Header;