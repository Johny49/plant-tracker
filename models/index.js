const User = require('./User');
const Plant = require('./plant');


User.hasMany(Plant, {
  foreignKey: 'user_id',
 onDelete: 'CASCADE',
});

Plant.belongsTo(User, {
  foreignKey: 'user_id'
})


  



module.exports = { User, Plant };