import React, {useEffect} from 'react';
import Message from '../Message';
import '../../styles/messageList.scss'

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
