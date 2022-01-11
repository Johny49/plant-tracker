const router = require('express').Router();
const {Plant} = require('../../models');

router.post('/', async (req, res) => {
    try {
        const plant = await Plant.create(req.body); //NOT SURE YET OF WHAT GOING TO BE ADDED
        return res.json(plant)
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;