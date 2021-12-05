const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

mongoose.connect('mongodb://localhost/urlShortener',{
    useNewUrlParser: true, useUnifiedTopology: true
})

app. set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.listen(process.env.PORT || 8000)
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('index')
})

app.post('/shortUrls',async (req,res)=>{
    await ShortUrl.create({full:req.body.fullUrl})
    res.redirect('/')
})