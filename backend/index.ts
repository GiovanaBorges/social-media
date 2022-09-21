require("dotenv").config()
const express = require("express")
const server = express()

server.use(express.json())

server.listen(8087,()=>{
    console.log("Server is running")
})