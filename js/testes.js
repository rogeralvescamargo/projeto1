const express = require ('express');
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get('/ola/:nome/:idade', function(req, res){
    res.send("<h1>O nome é: "+req.params.nome+"</h1>"+"<h2> Sua idade é: "+req.params.idade+"</h2>");
});


app.listen(8081, function(){console.log("Servidor Rodando!");});