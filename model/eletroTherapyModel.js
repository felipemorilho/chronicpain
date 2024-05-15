const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const EletroTherapy = db.define('EletroTherapy', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    type: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    amplitude: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    frequency: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    painRelief: {
        type: DataTypes.INTEGER,
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

module.exports = EletroTherapy;