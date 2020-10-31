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
        $("#texto").append("Error al registrar! Revise que los parámetros coincidan");
        return;
    }
    else if(email=="" || confEmail=="" || pass=="" || confPass=="" || nombre=="" || apellido=="") {
        $("#texto").empty();
        $("#texto").append("Algún dato no fue llenado");
        return;
    }
    else if(email == confEmail && pass ==confPass) {
        $("#texto").empty();
        $("#texto").append("Registro Correcto");
    }
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Quintero03"
    });
    con.connect(function(err) {
        if(err) {
            throw err
        }
        $("#texto2").empty();
        $("#texto2").append("Conectado!");
        var sql = "" 
    })
    
})