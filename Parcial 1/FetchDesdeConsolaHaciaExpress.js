fetch("http://localhost:8081")
    .then(respuesta => respuesta.text())
    .then(datos => console.log(datos)) 