/*Conexão com banco mysql*/

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "senhamove2020",
  database: "testedb",
});
module.exports = con;

/*

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO tabelateste (Nome, Idade) VALUES ('Roger', '29')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

  */