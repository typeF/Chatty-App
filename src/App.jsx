import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      currentUser: {name: 'Bobby'},
      messages: [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles',
          id: 1
        },
        {
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.',
          id: 2
        }
      ]
    }
  }

  render() {
    console.log('Rendering <app>');
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser.name}/>
      </div>
    );
  }
}

export default App;

