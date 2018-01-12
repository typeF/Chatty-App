const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

const wss = new SocketServer({ server });

  wss.broadcast = function broadcast(data) {
    wss.clients.forEach(client => {
      client.send(data);
    })
  }

  wss.on('connection', (ws) => {
    console.log('Client Connected');
    ws.send(JSON.stringify({ type: 'userColor', color: randomColor() }));
    connectionChange('joined');

  ws.on('message', message => {
    message = JSON.parse(message);
    // console.log('Received from React: ', message);
    const { type, username, userColor, content, oldUser, newUser } = message;
    let outgoingMessage = {type: type, id: uuidv1(), username: username, color: userColor, content: content };

    switch(type) {
      case 'postNotification':
        outgoingMessage.type = 'incomingNotification';
        outgoingMessage.content = `${oldUser} has changed their name to ${newUser}`;
        break;
      case 'postMessage':
        outgoingMessage.type = 'incomingMessage';
        break;
      case 'postImage':
        outgoingMessage.type = 'incomingImage';
        break;
    }
    broadcast(outgoingMessage);
  });

  ws.on('close', (ws) => {
    console.log('Client disconnected')
    connectionChange('left');
  });
});

function broadcast(message) {
  wss.broadcast(JSON.stringify(message));
}

function connectionChange (status) {
  outgoingMessage = {
    type: 'incomingNotification',
    id: uuidv1(),
    content: `A user has ${status} the channel.`,
    activeUsers: wss.clients.size
  }
  broadcast(outgoingMessage);
}

function randomColor() {
  const c1 = randomizer();
  const c2 = randomizer();
  const c3 = randomizer();
  const colors = {color: `rgb(${c1},${c2},${c3})`};
  return colors;
}

function randomizer() {
  return Math.floor(Math.random() * 255);
}