const express = require('express')
const app = express()

app. set('view engine', 'ejs')

app.listen(process.env.PORT || 8000)
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('index')
})

