window.addEventListener("load",function() {
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
        var values = [];
        var sql = "select * from preguntas where numPreg=1";
        con.query(sql,values,function(err,results,fields) {
            if(err) {
                throw err;
            }
            $("#numPreg").text(results[0].numPreg);
            $("#oracion").text(results[0].oracion);
            $("#incisoA").text(results[0].incisoA);
            $("#incisoB").text(results[0].incisoB);
            $("#incisoC").text(results[0].incisoC);
            $("#incisoD").text(results[0].incisoD);
            $("#incisoE").text(results[0].incisoE);
        })
    }); 
});
const submit = document.getElementById("submit");
submit.addEventListener('click',function() {
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
        var sql = "select resp from preguntas where numPreg=1";
        con.query(sql,function(err,results,fields) {
            if($("#resp").val() == results[0].resp) {
                    
            }
        });
    });
});