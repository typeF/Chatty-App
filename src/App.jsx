import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: 'Bobby' },
      messages: [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles',
        },
        {
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.',
        }
      ]
    }
    this.newMessage = this.newMessage.bind(this);
  }

  newMessage(message) {
    const inputMsg = { username: 'New Person', content: message}
    const messages = this.state.messages.concat(inputMsg)
    this.setState({ messages: messages });
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    setTimeout(() => {
      console.log('Simulating incoming message');
      const newMsg = { id: 3, username: 'Michelle', content: 'Hello there!' };
      const messages = this.state.messages.concat(newMsg);
      this.setState({ messages: messages });
    }, 3000);
  }

  render() {
    console.log('Rendering <app>');
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar newMessage={this.newMessage} currentUser={this.state.currentUser.name} />
      </div>
    );
  }
}

export default App;

