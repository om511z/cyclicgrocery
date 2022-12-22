const mongoose = require('mongoose')

const URL = 'mongodb+srv://omkhot:<omkhot>@cluster0.smqxlzd.mongodb.net/?retryWrites=true'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})