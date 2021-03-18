const express = require('express');
const server = express();
const mustacheExpress = require('mustache-express');
const {v4:uuidv4} = require('uuid')

server.engine('mustache',mustacheExpress());
server.set('views','./views');
server.set('view engine','mustache');
server.use(express.urlencoded())
server.use(express.static('css'))

global.tripList = [
    {
    title:"Atlanta", 
    departTrip:"2021-03-17", 
    returnTrip:"2021-03-26", 
    image:"https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
}
]

// server.get('/login', (req, res) => {
//     res.
// })



server.listen(3000, () => {
    console.log('Server is running...');
})