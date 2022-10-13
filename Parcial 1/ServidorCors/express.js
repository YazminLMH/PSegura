//header('Access-Control-Allow-Origin: *');
const express = require('express');
const cors = require('cors')

const app = express()
app.use(express.text())
app.use(express.json())

//app.use(cors({origin: "http://localhost"}))

app.get('/', (req, res) => {
    res.send('Servidor Express contestando a get desde el pto 8083')

})

app.post('/', (req, res) => {
    res.send('Servidor Express contestando a post desde el pto 8083')


})
app.post('/texto',(req, res) => {
    console.log(req.body)
    let may= req.body.toUpperCase()
    let sinesp = req.body.trim()
    let longi = req.body.length
    res.json({mayusculas: may,
              sinespacios:sinesp,
              longitud:longi}) 
})

app.listen(8083,() => {
    console.log('Servidor express escuchando en pto 8083')
})

//npm i cors //la misma carpeta 
//thunder client localhost:8082/texto
//agregar mas rutas , texto , json , donde le mandes 
//algo una variable en el request param 
//recibe querys en la ruta 