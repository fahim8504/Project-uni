import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Connect to Socket.io server

function ChatRoom({ match }) {
  const { college, department, year } = match.params;
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.emit('joinRoom', { college, department, year });

    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.emit('leaveRoom');
      socket.off();
    };
  }, [college, department, year]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('chatMessage', message);
    setMessage('');
  };

  return (
    <div>
      <h2>Chat Room - {college} / {department} / {year}</h2>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
