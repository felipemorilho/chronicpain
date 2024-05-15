const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Guideline = db.define('Guideline', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Guideline;