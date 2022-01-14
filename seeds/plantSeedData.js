const {Plant} = require('../models');

const plantData =[
    {
        "id":"1",
        "name":"Fern",
        "nickname":"jigglypoof",
        "note":"caught this bad boy in mt moon",
        "user_id":"1"
    },
    {
        "id":"2",
        "name":"Hibiscus",
        "nickname":"Boris",
        "note":"my favorite pink plant",
        "user_id":"2",

    },
    {
        "id":"3",
        "name":"Lion's Mane",
        "nickname":"Michael",
        "note":"named after my ex",
        "user_id":"3",

    }
]

const seedPlant = () => Plant.bulkCreate(plantData);

module.exports = seedPlant;