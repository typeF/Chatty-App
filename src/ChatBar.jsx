import React, { Component } from 'react';

class ChatBar extends React.Component {
  render() {
    const username = this.props.currentUser;
    console.log('Rendering <ChatBar>');
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={username} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

export default ChatBar;