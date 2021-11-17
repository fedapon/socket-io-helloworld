const {httpServer} = require('./app')
const {chatService} = require('./chatService')

//webserver
httpServer.listen(80, function () {
    console.log(`Server started`)
})

//chat service
chatService(httpServer)
