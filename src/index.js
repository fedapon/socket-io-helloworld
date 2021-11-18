const {httpServer} = require('./app')
const {chatService} = require('./chatService')
const dotenv = require('dotenv')

//read .env
dotenv.config()
const expressPort = process.env.EXPRESS_PORT || 80

//webserver
httpServer.listen(expressPort, function () {
    console.log(`Server started on ${expressPort}`)
})

//chat service
chatService(httpServer)
