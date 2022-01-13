const {Plant} = require('../models');

const plantData =[
    {
        "id":"1434234231",
        "name":"Fern"
    },
    {
        "id":"5678678",
        "name":"Hibiscus"

    },
    {
        "id":"14340982",
        "name":"Lion's Mane"

    }
]

const seedPlant = () => Plant.bulkCreate(plantData);

module.exports = seedPlant;