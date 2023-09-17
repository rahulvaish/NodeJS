const express = require('express')
const app = express()

const tasks = require('./routes/TaskController.js')
app.use(express.json())
app.use('/api/v1', tasks)



const connectDB = require('./db/Connect.js')
require('dotenv').config()
const port = process.env.PORT || 3000
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI);//Using connectionString
        app.listen(port)
    }catch(err){
        console.log('Error in DB Connectivity')
    }
}
start();