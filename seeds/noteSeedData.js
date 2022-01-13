const {Notes} = require('../models');

const noteData = [
    {
        "nickname":"jigglypoof",
        "note":"caught this bad boy in mt moon",
        "user_id":"1",
        "plant_id":"1434234231"
    },
    {
        "nickname":"Boris",
        "note":"my favorite pink plant",
        "user_id":"2",
        "plant_id":"5678678"

    },
    {
        "nickname":"Michael",
        "note":"named after my ex",
        "user_id":"3",
        "plant_id":"14340982"

    }
]

const seedNotes = () => Notes.bulkCreate(noteData);

module.exports = seedNotes;