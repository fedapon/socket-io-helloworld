const socketIo = require('socket.io')

const chatService = (httpServer) => {
    const io = socketIo(httpServer);

    //handle new connection
    io.on('connection', (socket) => {
        console.log(`New connection ID: ${socket.id}`)
        
        //handle room joins
        socket.on('chat:join', (data) => {
            console.log(`Connection ID: ${socket.id} - Joined to Room: ${data.room}`)
            socket.join(data.room)
        })
        
        //send received message from client to all room participants
        socket.on('chat:message', (data) => {
            io.to(data.room).emit('chat:message', data)
        })
    })
}

module.exports = {chatService}