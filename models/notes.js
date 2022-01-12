const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Notes extends Model {}

Notes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        name: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        note: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            unique: true,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        plant_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            references: {
                model: 'plant',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'plant',
      }
);

module.exports = Notes;