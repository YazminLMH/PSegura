const express = require("express");
const router = express.Router();
const sql = require("mysql2");

var pool = sql.createPool({
    host: "localhost",
    database: "ejemplo",
    user: "root",
    password: "admin"
});


router.get('', function (req, res) {
    console.log(req.body)
    if (req.body.idEmpleado == undefined) {
        pool.query('SELECT * FROM empleado', function (err, response, fields) {
            res.send(JSON.stringify(response))
        })
    }
    else {
        pool.query('SELECT * FROM empleado WHERE IdEmpleado =' + req.body, function () {
            res.send(JSON.stringify(response))
        })
    }
})

router.post('', function (req, res) {
    console.log(req.body)

    let nombre = req.body.nombre
    let apellido = req.body.apellido
    pool.query(`INSERT INTO empleado (nombre,apellido) VALUES('${nombre}','${apellido}')`, function (err, response, fields) {
        res.send("Se registro los datos")
    })
})

router.delete('/:IdEmpleado', function (req, res) {

    pool.query(`DELETE FROM empleado WHERE IdEmpleado = '${req.params.IdEmpleado}'`, function (err, response, fields) {
        res.send(`El empleado con el id ${req.params.IdEmpleado} se a Eliminado`)
    })


})

router.put('', function (req, res) {
    let IdEmpleado = req.body.IdEmpleado
    nombre = req.body.nombre
    apellido = req.body.apellido
    pool.query(`SELECT * FROM empleado WHERE IdEmpleado = '${req.body.IdEmpleado}'`, function (err, response, fields) {
        nombre = response.nombre
        apellido = response.apellido
    })

    pool.query(`UPDATE empleado SET nombre='${nombre}',apellido='${apellido}' WHERE IdEmpleado = '${IdEmpleado}'`, function (err, response, fields) {
        res.send(`El empleado con el id ${IdEmpleado} se a actualizado`)
    })
})

module.exports.router = router