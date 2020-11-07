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
        con.query("select correo,pass from usuarios",function(err,results,fields) {
            if(err) {
                throw err;
            }
            //console.log(err);
            console.log(results[0].correo);
            console.log(results[0].pass);
            if(correo==results[0].correo && pass==results[0].pass) {
                
                var values = [correo,]
            }
        })
    });
});