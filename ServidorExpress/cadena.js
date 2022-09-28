

//const pasarMayusculas = (cadenas) =>
function pasarMayusculas(cadena){
    return cadena.toUpperCase();
}
function quitarEspacios(cadena){
    return cadena.replace(/ /g,"");

}

function obtenerLongitud(cadena){
    return cadena.length;
}

exports.pasarMayusculas = pasarMayusculas;
exports.quitarEspacios = quitarEspacios;
exports.obtenerLongitud = obtenerLongitud;