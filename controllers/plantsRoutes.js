const router = require('express').Router();
const {Plant} = require('../models');
const axios = require('axios'); 
const withAuth = require('../utils/auth')


router.get('/', async (req, res) => {
    try {
        const plantsData = await Plant.findAll({});
        const plants = plantsData.map((plant) => plant.get({plain: true}))
        
        res.render('plant', {plants, logged_in: req.session.logged_in})
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/:name', withAuth, async (req, res) => {
    try {
        const plantData = await Plant.findOne({
            where: { name: req.params.name}
        });

        const result = await axios.get(`https://api.inaturalist.org/v1/taxa?q=${req.params.name}`);
       
        const wikipedia = result.data.results[0].wikipedia_url;
        const common = result.data.results[0].preferred_common_name;
        const pic = result.data.results[0].default_photo.medium_url;
     
        const plant = plantData.get({plain: true});
        res.render('singlePlant', {plant, wikipedia, common, pic, logged_in: req.session.logged_in});
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;