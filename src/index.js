const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Article = require('../models/articles')
const methodOverride =require('method-override')


const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


// Ruta principal Home
app.get('/',(req,res)=>{
    const article = Article.find().sort({   //traer los articulos y ordenarlos 
        createAt:"desc"
    })

    res.render('articles/index',{articles: articles})    //renderizar la vista de home
})

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('Conectado a MongoDB Atlas'))
    .catch((err)=>console.error(err))

app.listen(port,
    ()=> console.log(`Servidor escuchando en el puerto ${port}`))