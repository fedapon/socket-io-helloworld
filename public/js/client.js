const socket = io()
let chatContainer =document.getElementById('chat-container')
let joinContainer =document.getElementById('join-container')
let display = document.getElementById('display')
let username = document.getElementById('name')
let message = document.getElementById('message')
let room = document.getElementById('room')
let joinBtn = document.getElementById('btn-join')
let sendBtn = document.getElementById('btn-send')

let roomNumber = 1

sendBtn.addEventListener('click', function() {
    socket.emit('chat:message', {
        room: roomNumber,
        username: username.value,
        message: message.value
    })
    console.log('data sent')
})

joinBtn.addEventListener('click', function () {
    chatContainer.style.display = 'block'
    joinContainer.style.display = 'none'
    roomNumber = room.value != '' ? room.value : 1
    socket.emit('chat:message:join', {
        room: roomNumber
    })
})

socket.on('chat:message', data => {
    console.log('new data')
    display.innerHTML += `<p><strong>${data.username}:</strong> ${data.message}</p>`
})