const { Sequelize } = require('sequelize');
module.exports = new Sequelize('mikasapet',process.env.DB_USER,process.env.DB_PASSWORD,{
    host:process.env.DB_PORT,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        require:30000,
        idle:10000
    },
    logging: false,
    
});