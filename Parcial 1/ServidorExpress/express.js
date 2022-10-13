//header('Access-Control-Allow-Origin: *');
const express = require('express');
const cors = require('cors')
const {json}=require('express');
var  morgan = require('morgan')
const cadena = require('./cadena')
//const (pasarMayusculas.quitarEspacios) = require('./cadena')

var fs = require('fs')
var path = require('path')

const app = express()
app.use(express.text())
app.use(express.json())

app.use(cors({origin: "http://localhost"}))





// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))


app.use('/', (req, res, next) => {
  console.log('Primer funcion middleware')
  next()
}, (req, res, next) => {
  console.log('Segunda funcion middleware')
  next()
});

//app.use(morgan(combined))
// var accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'});
// app.use(morgan('combined',{stream:accessLogStream}))



app.get('/', (req, res) => {
    //res.send('Servidor Express contestando a get desde el pto 8081')
    res.sendFile('./Static/Index.html',{root:__dirname},(err)=>{console.log('Archivo enviado')})
})



app.post('/texto', (req, res) => {
  console.log(req.body)
  // let may = req.body.toUpperCase()
  // let sinesp = req.body.trim()
  // let longi = req.body.length

  let may = cadena.pasarMayusculas(req.body);
  let sinesp=cadena.quitarEspacios(req.body);
  let longi=cadena.obtenerLongitud(req.body)
  res.json({
    mayusculas: may,
    sinespacios: sinesp,
    longitud: longi
  })
})


 

app.post('/json',(req, res)=>{
  console.log(req.body.nombre)
  let cadena="Hola"+req.body.nombre+" "+req.body.apellido+"como estas"
  res.json({saludo:cadena})
} )

app.get('/mayusculas/:cadena', (req, res) => {
  console.log(req.params)
  res.send(req.params)
})

app.get('/suma', (req, res) => {
  console.log(req.query)
  let suma = parseInt(req.query.x)+parseInt(req.query.y)
  res.send(`La suma es ${suma}`)

})
app.listen(8083,() => {
    console.log('Servidor express escuchando en pto 8083')
    console.log(__dirname)
    console.log(__filename)
})

app.use(function (req, res) {
  res.status(404).sendFile('./Static/404.html', { root: __dirname })

})

//npm i cors //la misma carpeta 
//middleware 
//npm i morgan 