const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const howtoRouter = require('./routes/howto')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static(__dirname + './public'))
app.use(express.static("./")); 

app.use('/', indexRouter)
app.use('/howto', howtoRouter)

app.listen(process.env.PORT || 3000)