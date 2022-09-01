$(document).ready(function () {


    document.getElementById("boton").addEventListener("click", async function () {
        //console. log("click")´;
        let dato = await hacerPeticion();
        console.log(dato);
        document.getElementById('imagen').src = dato.file
    });

    async function hacerPeticion() {
        let respuesta = await fetch("https://aws.random.cat/meow");
        let datosJson = await respuesta.json();
        return datosJson;
    }


    /*Thunderclient*/

    });