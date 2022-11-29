let funciones = require('../src/funciones.js');
let chai = require("chai");
let showl = chai.should();
//expect 
let expect = chai.expect;
//assert 
let assert = chai.assert;

//should
describe("Pruebas de la funcion potencia", function(){
    it("Deberia de regresar un numero y debe ser 8", function(){
   
        let resultado = funciones.potencia(2,3);
        resultado.should.be.a("number");
        resultado.should.equal(8);
    })
});

//expect
describe("Pruebas de la funcion potencia", function () {
    it("Deberia de regresar un numero y debe ser 8", function () {

        let resultado = funciones.potencia(2, 3);
        expect(resultado).to.be.a("number");
        expect(resultado).to.equal(8);
       
    })
});

//assert
describe("Pruebas de la funcion potencia", function () {
    it("Deberia de regresar un numero y debe ser 8", function () {

        let resultado = funciones.potencia(2, 3);
        assert.typeOf(resultado, 'number');
        

    })
});
