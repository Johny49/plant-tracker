const sequelize = require('../config/connection');
const seedPlant = require('./plantSeedData');
const seedUsers = require('./userSeedData');
const seedNotes = require('./noteSeedData');


const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedPlant();

    await seedUsers();

    await seedNotes()

    process.exit(0);
};



seedAll();