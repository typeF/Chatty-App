import React, { Component } from 'react';

class ChatBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.currentUser
    }
    this.changeUser.bind(this);
  }

  changeUser(user) {
    this.setState({ value: user });
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" value={this.state.value} 
          onChange={event => {
            this.changeUser(event.target.value) 
          }} 
          onKeyPress={event => {
            if (event.key === 'Enter') 
              {this.props.differentUser(this.state.value)}
          }}/>
          
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" 
          onKeyPress={(event => {
            if (event.key === 'Enter') 
              { this.props.newMessage(event.target.value); event.target.value = ''; } 
            })
          }/>
      </footer>
    )
  }
}

export default ChatBar;