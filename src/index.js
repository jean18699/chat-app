const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app) // Para poder usar socket io debemos entrar a app en un createServer
const io = socketio(server);

const port = process.env.PORT || 3000;
publicDirectoryPath = path.join(__dirname,'../public')


app.use(express.static(publicDirectoryPath))

let count = 0;

io.on('connection', (socket)=>{
    console.log('New websocket connection');
    socket.emit('updatedCount', count)

    socket.on('increment', ()=>{
        count++
        io.emit('updatedCount', count)
    });

})




app.get('/', (req, res) => res.render('index'))


server.listen(port, () => console.log(`Example app listening on port ${port}!`)) // aqui se cambia el app.listen por server.listen si se usa server