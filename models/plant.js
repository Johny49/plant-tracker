const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}




Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wikipedia_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attribution: {
      type: DataTypes.STRING,
    },
    medium_url: {
      type: DataTypes.STRING,
    },
    preferred_common_name: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    nicknames: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plant',
  }
);

module.exports = Plant;
