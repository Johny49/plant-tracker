const {Plant} = require('../models');

const plantData =[
    {
        "id":"1434234234",
        "plant":"Fern"
    },
    {
        "id":"5678678",
        "plant":"Hibicus"

    },
    {
        "id":"14340982",
        "plant":"Lion's Mane"

    }
]

const seedPlant = () => Plant.bulkCreate(plantData);

module.exports = seedPlant;