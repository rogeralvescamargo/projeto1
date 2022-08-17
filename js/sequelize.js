const Sequelize = require ('sequelize');
const sequelize = new Sequelize ('testedb', 'root', 'senhamove2020',{
    host: "127.0.0.1",
    dialect: "mysql"
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})



/*

Exemplo de comando para criar linha:

Usuario.create({
    nome: "Ciclano",
    idade: 33,
    email: "ciclanos@email.com"
})

------------------------------------------------------------------------------------------------

Exemplo de comando para deletar linha:

Usuario.destroy({
where: {id: 3},
});

------------------------------------------------------------------------------------------------

Criação da tabela de usuarios via sequelize

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

Usuario.sync({force:true})

------------------------------------------------------------------------------------------------

Teste de validação da conexão
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})

*/