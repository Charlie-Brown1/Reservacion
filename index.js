'use strict'

const express = require('express')
const port = (process.env.PORT || 8000)
const path = require('path')
const exphbs = require('express-handlebars')

// Inizializations
const app = express()
require('./src/config/database/connection')

//settings
app.set('port', port)

app.set('views', path.join(__dirname, 'src/views'))

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs')



// app.engine('.hbs', exphbars({
//     defaultLayout: 'main',
//     layoutsDir: path.join(app.get('views'), 'layouts'),
//     partialsDir: path.join(app.get('views'), 'partials'),
//     extname: '.hbs'
// }))

// app.set('view engine', '.hbs');

//midlewares

app.use(express.urlencoded({extended: false}))

app.use(express.json())

// global variables

// static files


app.use(express.static(path.join(__dirname, 'src/public')))

// routes

    // rutas cliente // render
    app.use(require('./src/routes/routes-client/index'))
    // rutas api
    // app.use(require('./src/routes/routes-api/login'))

// server listening
app.listen(app.get('port'), (err) => {
    if(err) {
        console.log("there was an error ", err) 
    }else{
        console.log("server running on ports ", app.get('port'))
    }
})