import React, {useEffect} from 'react';
import Message from '../Message';

function MessageList({ messages }) {
    
    useEffect(() => {
        document.querySelector('.message__list').scrollTop = document.querySelector('.message__list').scrollHeight
    }, [messages])

    return (
        <div className="message__list">
            {
                messages &&
                messages.map((message) => (
                    <Message message={message} key={message.id}/>
                ))
            }
        </div>
    )
}

export default MessageList;
