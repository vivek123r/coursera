import React from 'react';
import lemon from './assets/lemon.webp';

function Header() {
    return (

        <header>
            <img src={lemon} alt="Little Lemon Logo" style={{ width: '150px' }} />
            <h1>Welcome to Little Lemon</h1>
        </header>
    );
}

export default Header;
