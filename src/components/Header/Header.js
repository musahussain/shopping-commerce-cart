import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <nav>
                <a href="/order">Order</a>
                <a href="/shop">Shop</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;