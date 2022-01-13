const User = require('./User');
const Plant = require('./Plant');
const Notes = require('./Notes')


User.hasOne(Notes, {
  foreignKey: 'user_id',

  onDelete: 'CASCADE',
});


Notes.belongsTo(User, {
  foreignKey: 'user_id',
});
  
Notes.belongsTo(Plant, {
  foreignKey: 'plant_id'
});

  Plant.hasMany(Notes, {
   foreignKey: 'plant_id',
   onDelete: 'CASCADE',
  });


  



module.exports = { User, Plant, Notes };