    
    const Sequelize = require("sequelize");
   
   //Conexão ao DB
    const sequelize = new Sequelize(
    "dbname",
    "username",
    "password",
    {
        host: "host",
        dialect: "mysql",
    }
    );

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }