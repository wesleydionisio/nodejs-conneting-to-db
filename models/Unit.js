const db = require('./Database')

const Unit = db.sequelize.define('unidades', {

    unidade: {
        type: db.Sequelize.STRING
    },
    urlAgenda: {
        type: db.Sequelize.STRING
    },
    status: {
        type: db.Sequelize.BOOLEAN,
        defaultValue: true
    }

});


module.exports = Unit