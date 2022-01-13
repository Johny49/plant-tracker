const router = require('express').Router();
const {Plant} = require('../models');
const axios = require('axios'); 


router.get('/', async (req, res) => {
    try {
        const plantApi = async (name) => {
            const result = await axios.get(`https://api.inaturalist.org/v1/taxa?q=${name}`);
            return result;
        }
        
        // console.log(result.data.result.results);
        // return res.json(result.data.results[0]);
        const plantsData = await Plant.findAll({});
        const plants = plantsData.map((plant) => plant.get({plain: true}))
        
        res.render('plant', {plants, plantApi})
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;