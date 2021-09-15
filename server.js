const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')

const app = express()

const router = require('./server/routes/router')


const connectDB = require('./server/database/connection')

//config file
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8000

//log request
app.use(morgan('tiny'))

//mongoDB connection
connectDB()

//bodyparser
app.use(express.urlencoded({extended:true}))


//set view engine
app.set('view engine','ejs')

//app.set('views',path.resolve(__dirname,'views/ejs'))

//Load asset
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))

app.use('/img',express.static(path.resolve(__dirname,'assets/img')))

app.use('/js',express.static(path.resolve(__dirname,'assets/js')))



//Routes
app.use('/',router)

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})