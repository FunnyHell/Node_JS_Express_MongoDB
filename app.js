const express = require('express'),
    path = require('path'),
    dotenv = require('dotenv');
const app = express()

dotenv.config( { path : 'config.env'} )

const port = process.env.PORT
const connectDB = require('./server/database/connection');
connectDB();

app.engine('ejs', require('ejs-mate'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log('server started on http://localhost:' + port)
})