const express = require('express')
const path = require('path')

const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html')
})

app.listen(3000,()=>{
 console.log('listening to port 3000')
})