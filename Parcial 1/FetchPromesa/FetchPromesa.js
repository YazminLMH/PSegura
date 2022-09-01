
$(document).ready(function () {

  

    document.getElementById("boton").addEventListener("click", function () {
        //console. log("click")´;
        hacerPeticion();
    });

    function hacerPeticion() {
        fetch("https://aws.random.cat/meow")
            .then(respuesta => respuesta.json())
            .then(datos => document.getElementById('imagen').src = datos.file)
    }


    /*Thunderclient*/

    
});