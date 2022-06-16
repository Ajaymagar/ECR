

const express = require('express')

const app = express()

app.get('/get',(req , res)=>{
    res.send({
        "message":"api working 1"
    })
})


app.listen(3000,()=>{
    console.log('server is listing o 3000')
})