const router = require('express').Router();
const userRoutes = require('./userRoutes');
const addPlantRoutes = require('./addPlantRoutes');

router.use('/user', userRoutes);
router.use('./addPlant', addPlantRoutes);

module.exports = router;