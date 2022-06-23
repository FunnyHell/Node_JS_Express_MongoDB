const express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    User = require('../server/models/user')

router.get('/', (req, res) => {
    res.render('pages/index', { title: 'main page' })
})

router.post('/', (req, res) => {
    if (!req.body) return res.sendStatus(400)
    res.send(console.log(req.body))
    res.render('pages/index', {title: 'main page'})
})

router.get('/reg', (req, res) => {
    res.render('pages/registration', {title: 'registration'})
})

router.post('/reg', (req, res) =>{
    if(!req.body) return res.sendStatus(400)
    const {name, email} = req.body
    const Users = new User({name, email})
    Users
        .save()
        .then((result) => res.send(result))
        .catch((error) => {
            console.log(error)
        })
})



module.exports = router