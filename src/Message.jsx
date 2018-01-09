import React, { Component } from 'react';

class Message extends React.Component {
  render() {
    return (
      <div>
        <div className="message">
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
      </div>
    )
  }
}

export default Message;









// <div>
//   <div className="message">
//     <span className="message-username">Anonymous1</span>
//     <span className="message-content">I won't be impressed with technology until I can download food.</span>
//   </div>
//   <div className="message system">
//     Anonymous1 changed their name to nomnom.
//         </div>
// </div>