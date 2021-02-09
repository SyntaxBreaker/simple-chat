import React from 'react';
import { signOut } from '../../firebase/firebase';

function Header() {
    return (
        <header className="navbar">
            <h1>Chat</h1>
            <button onClick={signOut}>Logout</button>
        </header>
    )
}

export default Header;