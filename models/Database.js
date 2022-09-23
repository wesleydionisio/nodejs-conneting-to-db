    
    const Sequelize = require("sequelize");
    const Credential = require('./Credential')
   
   //Conexão ao DB
    const sequelize = new Sequelize(
    Credential.db,
    Credential.user,
    Credential.password,
    {
        host: Credential.host,
        dialect: "mysql",
    }
    );

    try {
        sequelize.authenticate();
        console.log('Conectado com sucesso');
      } catch (error) {
        console.error('Erro ao tentar fazer conexão:', error);
      }

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }

    