import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { db } from '../../firebase/firebase';
import MessageList from '../../components/MessageList';
import firebase from 'firebase';
import Header from '../../components/Header';

function Chat() {
    const user = useContext(UserContext);
    const [data, setData] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const fetchData = async () => {
        const doc = db.collection('messages');
        doc.orderBy("createdAt").onSnapshot(docSnapshot => {
            setData([]);
            docSnapshot.forEach(doc => {
                const newData = doc.data();
                newData['id'] = doc.id;
                setData(prevState => ([...prevState, newData]));
            })
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

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
        <div className="container">
            <div className="chat">
                <Header />
                <MessageList messages={data} />
                <div className="chat__form">
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <input className="chat__form__input" type="text" name="msg" value={newMessage.value} onChange={(event) => handleChange(event)} />
                        <input className="chat__form__input" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat;