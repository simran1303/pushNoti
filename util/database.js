const Sequelize = require('sequelize');

exports.sequelize = new Sequelize('pushnotification','root','1234',{
    dialect:'mysql',
    host: 'localhost',
})

