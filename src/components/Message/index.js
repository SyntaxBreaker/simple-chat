import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import {db} from '../../firebase/firebase';

function Message({ message }) {
    const user = useContext(UserContext);

    const removeMessage = () => {
        db.collection('messages').doc(message.id).delete();
    }

    return (
        <div className="message">
            <div className="message__profile">
                <img className="message__profile__avatar" src={message.photoURL} alt="Avatar" />
            </div>
            <div className="message__container">
                <h1 className="message__container__author">{message.displayName}</h1>
                <h2 className="message__container__body">{message.value}</h2>
                {user && message.uid === user.uid && <button onClick={() => removeMessage()}>Delete message</button>}
            </div>
        </div>
    )
}

export default Message;