
const mysql = require('mysql');
const express = require('express');

const app = express();

var con = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: "",
    database: 'ejemplo'

});



app.get('/',async (req,res) => {
    con.connect();
    con.query("SELECT * FROM empleado", function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results);

    });
    con.end();
    

});

app.listen(3000,() => {
    console.log('Servidor Express escuchando en el puerto 3000');
});