const router = require('express').Router();
const { Home } = require('../models');


router.get('/', (req,res) => {
    try {
        res.render('homepage')
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/login', (req, res) =>{
    res.render('login');
})


module.exports = router