const router = require('express').Router();
const {Plant} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req,res) => {
    try {
        res.render('addPlant', {logged_in: req.session.logged_in})
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    
    try { 
        const plant = await Plant.create({
            ...req.body,
            user_id: req.session.user_id,
        }); 
        return res.json(plant)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


module.exports = router;