const router = require('express').Router();
const userRoutes = require('./userRoutes');
const plantRoutes = require('./plantRoutes');

router.use('/user', userRoutes);
router.use('/plant', plantRoutes);

module.exports = router;