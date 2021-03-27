const express = require('express')
const app = express()

const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')

require('./database')

app.set('Port',4000)

app.use(morgan('dev'))
app.use(express.json())
//app.use(bodyparser.urlencoded({extended:true}))
//app.use(bodyparser.json())

//Rutas

app.use(cors());

app.use('/api/',require('./routes/pruebaRoute'))

// start server

app.listen(app.get('Port'),()=>{
    console.log("listen update: ",app.get('Port'))
})