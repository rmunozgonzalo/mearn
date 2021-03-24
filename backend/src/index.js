const express = require('express')
const app = express()

const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')

require('./database')

app.set('Port',4000)

//app.use(morgan('dev'))
//app.use(bodyparser.urlencoded({extended:true}))
//app.use(bodyparser.json())

// start server

app.listen(app.get('Port'),()=>{
    console.log("listen update: ",app.get('Port'))
})