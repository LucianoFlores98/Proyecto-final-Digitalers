const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()



const app = express()
const port = process.env.PORT || 3000

// Ruta principal Home
app.get('/',(req,res)=>{

})

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('Conectado a MongoDB'))
    .catch((err)=>console.error(err))

app.listen(port,
    ()=> console.log('Servidor escuchando en el puerto'))