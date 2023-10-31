import { useState, useContext } from 'react';
import firebase from 'firebase';
import { db } from '../../firebase/firebase';
import { UserContext } from '../../providers/UserProvider';
import '../../styles/form.scss';

function Form() {
    const [newMessage, setNewMessage] = useState('');
    const user = useContext(UserContext);

    const handleChange = event => {
        setNewMessage({ value: event.target.value });
    }

    const handleSubmit = async event => {
        const { displayName, uid, photoURL } = user;
        const { value } = newMessage;
        event.preventDefault();
        if (!value) {
            return false;
        }
        const data = {
            value,
            displayName,
            uid,
            photoURL,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date())
        }

        await db.collection('messages').add(data);

        setNewMessage({ value: '' });
    }

    return (
        <form className="form" onSubmit={(event) => handleSubmit(event)}>
            <textarea className="form__input--text" type="text" name="msg" placeholder="Type your message here..." value={newMessage.value} onChange={(event) => handleChange(event)} />
            <input className="form__input--submit" type="submit" value="Send" />
        </form>
    )
}

export default Form;