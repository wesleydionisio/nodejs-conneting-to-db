const Sequelize = require('sequelize')
const sequelize = new Sequelize('u187753551_node', 'u187753551_wesleydionisio', 'Barros@1613', {
    host: "sql810.main-hosting.eu",
    dialect: "mysql"
});

try {

    sequelize.authenticate();
    console.log('Conectado');

} catch (error) {

    console.error('Falha ao conectar com o DB.', error);

}