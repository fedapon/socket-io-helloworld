const express = require('express')
const path = require('path')
const http = require("http");

const app = express()
const httpServer = http.createServer(app);

app.use('/', express.static( path.resolve('./public')) )

module.exports = {app, httpServer}

