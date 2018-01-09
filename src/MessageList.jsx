import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
  render() {
    const msg = this.props.messages.map(message =>
    <Message username={message.username} content={message.content} key={Math.random()}/>
    );
    console.log('Rendering <MessageList>');
    return (
      <main className="messages">
        {msg}
      </main>
    )
  }
}

export default MessageList;

