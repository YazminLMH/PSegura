const express = require("express");

const path = require("path")
const app = express()
const ruta = require('./ruta_empleado')


app.use(express.text())
app.use(express.json())

app.use("/Empleado",ruta.router)

app.listen(2234)