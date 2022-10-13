//header('Access-Control-Allow-Origin: *');
const express = require('express');
const cors = require('cors')

const app = express()

app.use(cors({origin: "http://localhost"}))

app.get('/', (req, res) => {
    //res.send('Servidor Express contestando a get desde el pto 8081')
    res.sendFile('./Static/Index.html',{root:__dirname})
})

app.post('/', (req, res) => {
  //  res.send('Servidor Express contestando a post desde el pto 8081')
//(descomentar esta linea) 
res.json({usuario:'Myriam'})
})

app.use((req,res)=>{
res.status(404).sendFile('./Static/404.html',{root:__dirname})

})

app.listen(8083,() => {
    console.log('Servidor express escuchando en pto 8083')
    console.log(__dirname)
    console.log(__filename)
})

//npm i cors //la misma carpeta 