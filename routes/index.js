const express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    controller = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')
router.get('/', (req, res) => {
    res.render('pages/index', { title: 'main page' })
})

router.get('/login', (req, res) => {
    res.render('pages/login', { title: 'authorization page' })
})

router.get('/about', (req, res) => {
    res.render('pages/about', { title: 'about page' })
})

router.get('/profile', (req, res) => {
    res.render('pages/profile', authMiddleware, { title: 'profile page' })
})



router.post('/', (req, res) => {
    if (!req.body) return res.sendStatus(400)
    res.send(console.log(req.body))
    res.render('pages/index', { title: 'main page' })
})

router.get('/reg', (req, res) => {
    res.render('pages/registration', { title: 'registration' })
})

router.post('/reg', controller.registration)
router.post('/login', controller.login)


module.exports = router