const express = require('express')
const path = require('path')
const http = require("http");
const socketIo = require('socket.io')

const app = express()
const httpServer = http.createServer(app);
const io = socketIo(httpServer);

app.use('/', express.static( path.resolve('./public')) )

httpServer.listen(80, function () {
    console.log(`Server started`)
})


//handle new connection
io.on('connection', (socket) => {
    console.log(`New connection ID: ${socket.id}`)
    
    //send received message from client to all room participants
    socket.on('chat:message', (data) => {
        io.to(data.room).emit('chat:message', data)
    })
})





