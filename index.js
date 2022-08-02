const express = require('express')
const connect = require('./configs/db')
const { register , login } = require('./controllers/auth.controller')
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


app.post("/register" , register)

app.post("/login",login)



app.listen(5000 , async () => {
    try{
        await connect
        console.log("Connection to db success") 
    }
    catch(err){
        console.log(err.message)
    }

    console.log("Listening on the port 5000")
})