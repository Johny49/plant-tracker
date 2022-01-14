const router = require('express').Router();
const {Plant} = require('../models');
const axios = require('axios'); 
const withAuth = require('../utils/auth')


router.get('/', async (req, res) => {
    try {
        const plantsData = await Plant.findAll({});
        const plants = plantsData.map((plant) => plant.get({plain: true}))
        
        res.render('plant', {plants})
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const plantData = await Plant.findByPk(req.params.id);
        const plant = plantData.get({plain: true});
        res.render('singlePlant', {plant, logged_in: req.session.logged_in});
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;