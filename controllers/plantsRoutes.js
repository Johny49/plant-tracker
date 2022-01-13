const router = require('express').Router();
const {Plant} = require('../models');


router.get('/', async (req, res) => {
    try {
        
        const plantsData = await Plant.findAll({});
        const plants = plantsData.map((plant) => plant.get({plain: true}))
        console.log("b")
        res.render('plant', {plants})
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;