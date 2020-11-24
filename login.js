const logBtn = document.getElementById("logBtn");
logBtn.addEventListener('click', function(){
    var correo = $("#email").val();
    var pass = $("#pass").val();
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Quintero03", //change
        database: "preguntasexamen"
    });
    con.connect(function(err) {
        if(err) {
            throw err;
        }
        var values = [[correo],[pass]];
        console.log(correo)
        console.log(pass)
        var sql = "select correo,pass from usuarios where correo=? and pass=?";
        con.query(sql,values,function(err,results,fields) {
            if(err) {
                throw err;
            }
            if(correo == results[0].correo && pass == results[0].pass) {
                window.location.href = "examen.html";
            }
        })
    });
});