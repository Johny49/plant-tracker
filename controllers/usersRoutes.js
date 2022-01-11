const router = require('express').Router();
const { User, Plant} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
        const usersData = await User.findAll({exclude: ['password']});
        const users = usersData.map((user) => user.get({plain: true}))
        res.render('users', {users , logged_in: req.session.logged_in})
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id,{
            attributes:  { 
                include: [{model: Plant}],
                exclude : ['password']
            }
        });
        const user = userData.get({plain: true});
        res.render('user', {user, logged_in: req.session.logged_in});
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/:user_id/plant/:id', withAuth, async (req, res) => {
    try {
        const plantData = await Plant.findByPk(req.params.id);
        const plant = plantData.get({plain: true})
        res.render('plant', {plant, logged_in: req.session.logged_in}) 
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;