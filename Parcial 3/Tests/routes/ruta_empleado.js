const express = require("express");
const router = express.Router();
const sql = require("mysql2");

var pool = sql.createPool({
    host: "localhost",
    database: "ejemplo",
    user: "root",
    password: "admin"
});

/**
 * @swagger
 * /:
 *  get:
 *   description: Información de los objetos en la tabla.
 *   responses:
 *    200:
 *     description: Devuelve todos los empleados en la tabla.
*/

router.get('/', function (req, res) {

    try {

        pool.query('SELECT * FROM empleado', function (err, response, fields) {

            res.send(JSON.stringify(response))

        })

    } catch (error) {

        res.status(404).send('Sorry, cant find that');

    }

})

/**
 * @swagger
 * /:
 *  post:
 *   description: Inserccion de empleado .
 *   responses:
 *    200:
 *     description: Inserta los empleados a la BD.
*/

router.post('/', function (req, res) {
    console.log(req.body)

    let nombre = req.body.nombre
    let apellido = req.body.apellido
    pool.query(`INSERT INTO empleado (nombre,apellido) VALUES('${nombre}','${apellido}')`, function (err, response, fields) {
        res.send("Se registro los datos")
    })
})

/**
 * @swagger
 * /:
 *  delete:
 *   description: Eliminacion de un empleado.
 *   responses:
 *    200:
 *     description: Elimina un empleado ingresando su id en el parametro.
*/

router.delete('/:IdEmpleado', function (req, res) {

    pool.query(`DELETE FROM empleado WHERE IdEmpleado = '${req.params.IdEmpleado}'`, function (err, response, fields) {
        res.send(`El empleado con el id ${req.params.IdEmpleado} se a Eliminado`)
    })


})

/**
 * @swagger
 * /:
 *  put:
 *   description: Actalizacion de un empleado de la BD.
 *   responses:
 *    200:
 *     description: Actualiza los datos del empleado ingresando su id en el body
*/
router.put('/', function (req, res) {
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




