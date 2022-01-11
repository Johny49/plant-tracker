const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const addPlantRoutes = require('./addPlantRoutes');

router.use('/login', loginRoutes);
router.use('./addPlant', addPlantRoutes);

module.exports = router;