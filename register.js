const regBtn = document.getElementById("regBtn");
regBtn.addEventListener('click',function() {
    var email = $("#email").val();
    var confEmail = $("#confEmail").val();
    var pass = $("#pass").val();
    var confPass = $("#confPass").val();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();

    if(email != confEmail || pass != confPass)  {
        $("#texto").empty();
        $("#texto2").empty();
        $("#texto").append("Error al registrar! Revise que los parámetros coincidan");
        return;
    }
    else if(email=="" || confEmail=="" || pass=="" || confPass=="" || nombre=="" || apellido=="") {
        $("#texto").empty();
        $("#texto2").empty();
        $("#texto").append("Algún dato no fue llenado");
        return;
    }
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
        var values = [[email,nombre,apellido,pass,0]];
        var sql = "insert into usuarios values ?";
        con.query(sql,[values],function(err,result) {
            if(err) {
                $("#texto1").empty();
                $("#texto2").empty();
                $("#texto2").append("usuario ya registrado");
                throw err;
            }
            $("#texto1").empty();
            $("#texto2").empty();
            $("#texto2").append("registro correcto!");
        }) 
    })
        
})