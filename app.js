const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//create express app
const app = express() //instantiate app
app.use(bodyParser.json()) //parse incoming JSON

//use .env if not in production mode
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

//db connect
mongoose.connect(process.env.DB_CONNECTION, {})
.then((res) => {console.log('Connected to db')})
.catch((err) => {console.log('Error connecting to db, error: ', err)})

//need to declare cors before controllers
const cors = require('cors')
app.use(cors({
    origin: process.env.Client_URL,
    methods: "GET, POST, PUT, DELETE, HEAD, OPTIONS"
}))

//controller + route
const mediaController = require('./controllers/media')
app.use('/v1/api/media', mediaController) 

app.listen(3000)
module.exports = app