import React, {useContext} from 'react';
import { UserContext } from '../../providers/UserProvider';
import { signInWithGoogle, signOut } from '../../firebase/firebase';
import '../../styles/header.scss';

function Header() {
    const user = useContext(UserContext);

    return (
        <header className="header">
            <h1 className="header__title">Chat</h1>
            {user ? <button className="header__button" onClick={signOut}>Logout</button> : <button className="header__button" onClick={signInWithGoogle}>Sign in</button> }
        </header>
    )
}

export default Header;