

const express = require('express')

const app = express()

app.get('/get',(req , res)=>{
    res.send({
        "message":"api working"
    })
})


app.listen(3000,()=>{
    console.log('server is listing on 3000')
})