import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { db } from '../../firebase/firebase';
import MessageList from '../MessageList';
import Header from '../Header';
import '../../styles/chat.scss';
import Form from '../Form';

function Chat() {
    const user = useContext(UserContext);
    const [data, setData] = useState([]);

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

    return (
        <div className="container">
            <div className="chat">
                <Header />
                <MessageList messages={data} />
                {user && <Form />}
            </div>
        </div>
    )
}

export default Chat;