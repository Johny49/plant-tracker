const sequelize = require('../config/connection');
const seedPlant = require('./plantSeedData');
const seedUsers = require('./userSeedData');


const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedUsers();
    
    await seedPlant();


    process.exit(0);
};



seedAll();