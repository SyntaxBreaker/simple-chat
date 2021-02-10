import React from 'react';
import { signOut } from '../../firebase/firebase';

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Chat</h1>
            <button className="header__button" onClick={signOut}>Logout</button>
        </header>
    )
}

export default Header;