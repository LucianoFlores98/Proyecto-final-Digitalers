const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Article = require('../models/article')
const articleRouter = require('../routes/articles')
const signUpRouter = require('../routes/signUp')
const biographyRouter = require('../routes/biography')
const contactRouter = require('../routes/contact')
const projectsRouter = require('../routes/projects')
const logInRouter = require('../routes/logIn')
const methodOverride = require('method-override')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))


// Ruta principal Home
app.get('/', async(req, res)=>{
    const articles = await Article.find().sort({    //traer los articulos y ordenarlos
        createAt: "desc"
    }).limit(10)
    res.render('articles/index', {articles: articles})  //renderizar la vista del home
})

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('conectado a MongoDB Atlas'))
    .catch((err)=> console.error(err))

app.use('/articles', articleRouter);

app.use('/signUp',signUpRouter);

app.use('/logIn',logInRouter);

app.use('/biography', biographyRouter);

app.use('/projects',projectsRouter);

app.use('/contact',contactRouter);

app.use('/public/', express.static('./public/'))

app.listen(port,
    ()=> console.log(`Servidor escuchando en el puerto ${port}`)
)