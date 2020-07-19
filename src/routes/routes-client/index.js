'use strict'

const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('layouts/outside/home')
})

router.get('/informacion', (req, res) => {
    res.render('layouts/outside/informacion')
})

router.get('/register', (req, res) => {
    res.render('layouts/outside/register')
})

router.get('/login', (req, res) => {
    res.render('layouts/outside/login')
})

router.get('/Dashboard', (req, res) => {
    res.send('Este es el home!!')
})


module.exports = router