//Loade .env file contents into process.env.
require('dotenv').config()

const express = require('express')

const cors = require('cors')

require('./db/connection')

const router = require('./Routes/router')

const server = express()



server.use(cors())
server.use(express.json())
server.use(router)
const PORT = 4000 || process.env.PORT
//export uploads folfer to client
server.use('/uploads',express.static('./uploads'))


server.listen(PORT,()=>{
    console.log(`emp server starting at port number ${PORT}`);
})

server.get('/',(req,res)=>{
    res.send("Emp server starting....")
})
