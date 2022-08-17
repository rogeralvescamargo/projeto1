const Sequelize = require ('sequelize')


//Conexão Banco de dados
const sequelize = new Sequelize ('testedb', 'root', 'senhamove2020',{
    host: "127.0.0.1",
    dialect: "mysql",
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}