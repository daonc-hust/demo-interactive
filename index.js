const express=require('express')


const app=express()

app.listen(process.env.PORT||process.env.port||3001)

app.get('/',(req,res)=>res.sendFile(__dirname+'/demo.html'))