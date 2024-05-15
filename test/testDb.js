const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const sequelize = new Sequelize(dbConfig.development);

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o BD bem sucedidada!');
    } catch (error) {
        console.error('Erro ao conectar com o BD: ', error)
    }
}

testConnection();