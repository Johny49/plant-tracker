const User = require('./User');
const Plant = require('./Plant');
const Notes = require('./Notes')


User.hasOne(Notes, {
  foreignKey: 'User_id',

  onDelete: 'CASCADE',
});


Notes.belongsTo(User, {
  foreignKey: 'User_id',
});

User.hasMany(Plant, {
    foreignKey: 'User_id',
    onDelete: 'CASCADE',
  });
  

  Plant.belongsTo(User, {
    foreignKey: 'User_id',
  });


module.exports = { User, Plant, Notes };