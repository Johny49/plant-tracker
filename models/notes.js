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
        nickname: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        note: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            unique: true,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        plant_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
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
        modelName: 'notes',
      }
);

module.exports = Notes;