











const Sequelize = require("sequelize");

const banco = new Sequelize('usuarios','root','1234',{
    localhost: "localhost",
    dialect: "mysql"
})

banco.authenticate().then(()=>{
    console.log('Conexão Feita com Sucesso');
}).catch((e)=>{
    console.log('Erro de Conexão: ' + e);
})


module.exports = {
    Sequelize:Sequelize,
    banco,banco
}