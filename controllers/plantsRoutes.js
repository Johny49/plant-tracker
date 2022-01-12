const router = require('express').Router();
const {Plant} = require('../models');


router.get('/', async (req, res) => {
    try {
        const plantsData = await Plant.findAll({});
        const plants = plantsData.map((plant) => plant.get({plain: true}))
        res.render('plant', {plants , logged_in: req.session.logged_in})
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;