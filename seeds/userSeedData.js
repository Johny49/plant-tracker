const {User} = require('../models');

const usersData = [
    {
      "name": "Sal",
      "email": "sal@hotmail.com",
      "password": "password1234"
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "coolPw2020"
    },
    {
      "name": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "amiko2k20!"
    },
    {
      "name": "popeye",
      "email": "strongsailor@hotmail.com",
      "password": "ol!ve0!L234"
    },
    {
      "name": "Van Gogh",
      "email": "sendmyloveinabox@gmail.com",
      "password": "myearwasfirstwaittilyouseewhatsnext!2"
    },
    {
      "name": "Sam Sammish",
      "email": "bowler423@aol.com",
      "password": "Perfectgame10"
    },
    {
      "name": "Atlas Sound",
      "email": "atlassound@hotmail.com",
      "password": "thecovelives#65!"
    },
    {
      "name": "Kayne West",
      "email": "sk8terboiXD@yahoo.com",
      "password": "Crazywildman6"
    }
  ]

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;