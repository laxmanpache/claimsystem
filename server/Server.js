// const express = require('express')
import express from 'express';
import cors from 'cors'

const app = express()


//importing component

import Connection from './db.js';
import router from './route.js';


const port = 3003


app.use(express.json());
// app.use(cors);
app.use('/',router)

// app.get('/',(req,res)=>{
//     console.log("Hello")
//     // res.send("hello")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
Connection();