const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');


router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/api', apiRoutes);


module.exports = router;