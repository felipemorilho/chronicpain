const { DataTypes } = require('sequelize');
const db = require('../database/connection');
const User = require('./userModel');

const SpecificMovement = db.define('SpecificMovement', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    movement: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    repetition: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    sets: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
});

module.exports = SpecificMovement;