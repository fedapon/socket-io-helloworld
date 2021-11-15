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





