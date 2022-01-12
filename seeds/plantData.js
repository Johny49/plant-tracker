const { Plant } = require('../models');

const plantdata = [
  {
      name: 'Fern',},

];

const seedPlant = () => Plant.bulkCreate(plantdata);

module.exports = seedPlant;