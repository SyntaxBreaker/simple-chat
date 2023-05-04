import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import {db} from '../../firebase/firebase';
import '../../styles/message.scss';

function Message({ message }) {
    const user = useContext(UserContext);

    const removeMessage = () => {
        db.collection('messages').doc(message.id).delete();
    }

    return (
        <div className="message">
            <div className="message__profile">
                <img className="message__avatar" src={message.photoURL} alt="Avatar" />
            </div>
            <div className="message__container">
                <h2 className="message__author">{message.displayName}</h2>
                <p className="message__text">{message.value}</p>
                {user && message.uid === user.uid && <button className="message__button" onClick={() => removeMessage()}>Delete message</button>}
            </div>
        </div>
    )
}

export default Message;