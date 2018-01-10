import React, { Component } from 'react';

class Message extends React.Component {
  render() {
    const userClass = `message-username message-username-${this.props.userColor}`;
    return (
      <div>
        { this.props.username ?


        ( this.props.type === 'incomingImage' ?
        (<div className="message">
            <span className={userClass}>{this.props.username}</span>
            <div className="message-content">
              <img className="image" src={this.props.content} alt='Image'/>
            </div>
        </div> )
          :
        (<div className="message">
          <span className={userClass}>{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div> )
        )
        :
        <div className="message system">
          {this.props.content}
        </div>
        }
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