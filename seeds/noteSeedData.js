const {Notes} = require('../models');

const noteData = [
    {
        "nickname":"jigglypoof",
        "note":"caught this bad boy in mt moon",
        "user_id":"2345234",
        "plant_id":"235235"
    },
    {
        "nickname":"Boris",
        "note":"my favorite pink plant",
        "user_id":"273284",
        "plant_id":"098477"

    },
    {
        "nickname":"Michael",
        "note":"named after my ex",
        "user_id":"2095252",
        "plant_id":"8907552"

    }
]

const seedNotes = () => Notes.bulkCreate(noteData);

module.exports = seedNotes;