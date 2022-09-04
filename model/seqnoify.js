const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const TokenNotify =  sequelize.define('tokennotify', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,   
    },
    token:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = TokenNotify;