const router = require('express').Router();
const {Plant} = require('../../models');

router.post('/', async (req, res) => {
    console.log(req.session.user_id);
    try { 
        const plant = await Plant.create({
            ...req.body,
            user_id: req.session.user_id,
        }); 
        return res.json(plant)
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;