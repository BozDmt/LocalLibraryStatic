const express = require('express')
const app = express()
const path = require('path')
const http = require('http')

const port = '3501'

app.set('port',port)

app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port)