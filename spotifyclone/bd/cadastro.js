const bd = require("./bd");








const cadastrados = bd.banco.define('Inscrições',{
    email: {
        type: bd.Sequelize.STRING
    },
    confirmar_email: {
        type: bd.Sequelize.STRING
    },
    senha: {
        type: bd.Sequelize.STRING
    },
    apelido: {
        type: bd.Sequelize.STRING
    },
    dia: {
        type: bd.Sequelize.INTEGER
    },
    mes: {
        type: bd.Sequelize.INTEGER
    },
    ano: {
        type: bd.Sequelize.INTEGER
    },
    sexo: {
        type: bd.Sequelize.INTEGER
    },
})


module.exports = cadastrados;
