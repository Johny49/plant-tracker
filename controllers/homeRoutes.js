const router = require('express').Router();

router.get('/', (req,res) => {
    try {
        res.render('homepage')
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/login', (req, res) =>{
    if (req.session.logged_in) {
        res.redirect('/');
        return;
      }

    res.render('login');
})


router.get('/addPlant', (req, res) =>{
    try {
        res.render('addPlant',{logged_in:req.session.logged_in});
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router