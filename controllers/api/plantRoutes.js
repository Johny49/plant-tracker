const router = require('express').Router();
const {Plant} = require('../../models');
const axios = require('axios'); 


router.post('/:name', async (req, res) => {
    try { 
        console.log("HERE")
        const result = await axios.get(`https://api.inaturalist.org/v1/taxa?q=${req.params.name}`);
        // console.log(result.data.result.results);
        return res.json(result.data.results[0]);
        
        const plant = await Plant.create(req.body); //NOT SURE YET OF WHAT GOING TO BE ADDED
        return res.json(plant)
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;