require("dotenv").config()
PORT = process.env.PORT || 8080
const express = require("express")
const morgan = require("morgan")
const database = require('./database')
const drugRoute = require("./routes/drug")
const userRoute = require("./routes/user")

app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin',"*")
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use('/api',drugRoute)
app.use('/api',userRoute)

const startServer=async()=>{
    try{
        await database.connect()
        app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`)})
    }catch(err){
        console.log(err)
    }
    
}

startServer()