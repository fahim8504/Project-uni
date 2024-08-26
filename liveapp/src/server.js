const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinRoom', ({ college, department, year }) => {
    const room = `${college}-${department}-${year}`;
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on('chatMessage', (msg) => {
    const room = [...socket.rooms][1]; // the second room is the one the user joined
    io.to(room).emit('message', msg);
  });

  socket.on('disconnect', () => {
    console
