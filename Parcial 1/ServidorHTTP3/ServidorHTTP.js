//servidor http
const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end('Servidor HTTP de NodeJS respondiendo');
});

//servidor.listen(3307, () => {console.log('Servidor corriendo y escuchando en puerto 3307') });


servidor.listen(8082, () => { console.log('Servidor corriendo y escuchando un puerto 8082') });





