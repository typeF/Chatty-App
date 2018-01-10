import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
  render() {
    const msg = this.props.messages.map(message => {
    const {type, username, userColor, content, id} = message;
    return <Message type={type} username={username} userColor={userColor} content={content} key={id}/>
    });
    console.log('Rendering <MessageList>');
    return (
      <main className="messages">
        {msg}
      </main>
    )
  }
}

export default MessageList;

