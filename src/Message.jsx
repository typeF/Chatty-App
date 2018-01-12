import React, { Component } from 'react';

class Message extends React.Component {
  render() {
    const { userColor, username, content, type } = this.props;

    let imageContent;
    if (type === 'incomingImage') 
      imageContent = imageFilter(content);

    function imageFilter(imageContent) {
      const regExp = /(\S*.jpg|jpeg|png|gif)/g;
      return imageContent.split(regExp).map(item => {
        if (regExp.test(item)) 
          return <img className="image" src={item} alt='Image'/>
        else if (item)
          return <span className="message-digest-item">{item}</span>
      });
    }

    return (
      <div>
        { username ?
          ( type === 'incomingImage' ?
            (<div className="message">
                <span className="message-username" style={userColor}>{username}</span>
                <div className="message-content">
                  {imageContent}
                </div>
            </div>)
            :
            (<div className="message">
              <span className="message-username" style={userColor}>{username}</span>
              <span className="message-content">{content}</span>
            </div>)
          )
          :
          <div className="message system">
            {content}
          </div>
        }
      </div>
    )
  }
}

export default Message;
