const express = require('express')
const connectdb  = require('./config/connectdb')
var cors = require('cors')

const app = express()
const contactRouter = require('./routes/contact')

const port = 5001 
app.use(cors())
app.use(express.json())

connectdb()

app.use('/api/user',contactRouter)

app.listen(port,err=>{
    err?console.log(err):console.log(`you did it  u are connected to ${port}`)
})