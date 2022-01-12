const router = require('express').Router();
const userRoutes = require('./userRoutes');
const plantsRoutes = require('./plantsRoutes');

router.use('/user', userRoutes);
router.use('/plants', plantsRoutes);

module.exports = router;