import React from 'react';
import {signInWithGoogle} from '../../firebase/firebase';

function SignIn() {
    return (
        <div className="signIn">
            <button className="signIn__button" onClick={signInWithGoogle}>
                <span>Sign in with google</span>
            </button>
        </div>
    )
}

export default SignIn;