require('dotenv').config()

const mongoose = require('mongoose')

var user = process.env.user
var pass = process.env.pass
var ip = process.env.ip
var bd = process.env.bd
URI = ("mongodb://"+user+":"+pass+"@"+ip+"/"+bd+"")

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(db=>console.log("Bd conectada"))
    .catch(error=>console.log(error))

module.exports = mongoose