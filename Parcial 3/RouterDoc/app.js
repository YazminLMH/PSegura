const express = require("express");
const path = require("path")
const app = express()
const ruta = require('./routes/ruta_empleado');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API empleados',
            version: '1.0.0',
        },
        servers: [{ url: "http://localhost:2234" }],
    },
    apis: [`${path.join(__dirname, "./routes/ruta_empleado.js")}`],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(express.text())
app.use(express.json())
app.use("/Empleado",ruta.router)
app.listen(2234)