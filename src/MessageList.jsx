import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
  render() {
    return (
      <main className="messages">
        {this.props.messages.map(message => {
          const {type, username, userColor, content, id } = message;
          return <Message type={type} username={username} userColor={userColor} content={content} key={id} />
        })}
      </main>
    )
  }
}

export default MessageList;

