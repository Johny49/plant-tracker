const {Plant} = require('../models');

const plantData =[
    {
        "id":"1434234234",
        "nickname":"jigglypoof",
        "note":"caught this bad boy in mt moon",
        "user_id":"2345234",
        "plant_id":"235235"
    },
    {
        "id":"5678678",
        "nickname":"Boris",
        "note":"favorite pink plant",
        "user_id":"273284",
        "plant_id":"098477"

    },
    {
        "id":"14340982",
        "nickname":"Michael",
        "note":"named after my ex",
        "user_id":"2095252",
        "plant_id":"8907552"

    }
]

const seedPlant = () => Plant.bulkCreate(plantData);

module.exports = seedPlant;