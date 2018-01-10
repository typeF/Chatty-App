import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: 'Anonymous' },
      messages: [],
      activeUsers: 0,
      userColor: 'black'
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.differentUser = this.differentUser.bind(this);
  }

  differentUser(user) {
    const outgoingMsg = { type: 'postNotification', oldUser: this.state.currentUser.name, newUser: user}
    this.setState({ currentUser: {name: user}});
    this.socket.send(JSON.stringify(outgoingMsg))
  }

  newMessage(data) {

  const { type, id, content, username, activeUsers, color } = data;

    switch (type) {
      case 'userColor':
        this.setState({ userColor: color });
        break;
      case 'incomingMessage':
        const inputMsg = { type: type, id: id, userColor: color, username: username, content: content }
        const messages = this.state.messages.concat(inputMsg)
        this.setState({ messages: messages });
        break;
      case 'incomingImage':
        const inputMsg3 = { type: type, id: id, userColor: color, username: username, content: content }
        const messages3 = this.state.messages.concat(inputMsg3)
        this.setState({ messages: messages3 });
        break;
      case 'incomingNotification':
        const inputMsg2 = { type: type, id: id, content: content }
        const messages2 = this.state.messages.concat(inputMsg2)
        this.setState({ messages: messages2 });
        if (activeUsers)
          this.setState({activeUsers: activeUsers})
        break;
      default:
        throw new Error('Unknown event type ' + data.type);
    }

  }

  sendMessage(message) {
    console.log('Attempting to send message out to Websocket');
    console.log('Message sending out to WebSocket is', message);
    const hasImage = /.jpg|.jpeg|.png|.gif/.test(message);
    let type;
    if (hasImage)
      type = 'postImage';
    else type = 'postMessage';
    const outgoingMsg = { type: type, userColor: this.state.userColor, username: this.state.currentUser.name, content: message }
    this.socket.send(JSON.stringify(outgoingMsg));
  }

  componentDidMount() {
    console.log('componentDidMount <App />');

    this.socket = new WebSocket('ws:localhost:3001');

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Websocket Data is:', data);
      this.newMessage(data);
    }

    setTimeout(() => {
      console.log('Simulating incoming message');
      const newMsg = { id: 3, userColor: 'pink', username: 'Michelle', content: 'Hello there!' };
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
          <span className="navbar-userCount">{this.state.activeUsers} user(s) online</span>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar differentUser={this.differentUser} newMessage={this.sendMessage} currentUser={this.state.currentUser.name} />
      </div>
    );
  }
}

export default App;

