const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const usersRoutes = require('./usersRoutes');
const plantsRoutes = require('./plantsRoutes');

router.use('/', homeRoutes);
router.use('/users', usersRoutes);
router.use('/plants', plantsRoutes);
router.use('/api', apiRoutes);


module.exports = router;
