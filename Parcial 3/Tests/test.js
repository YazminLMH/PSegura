let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:2234';
// Encapsular en test dentro de la funcion describe() Y describirmos el test
describe('Inserta un empleado: ', () => {
    it('deberia insertar un empleado', (done) => { // En la funcion it() lo que deberia hacer
        chai.request(url)
            .post('/empleado')
            .send({ nombre: "Enrique", apellido: "Pena" })
            .end(function (err, res) {
                expect(res).to.have.status(200);   //aserciones 
                expect(res.text).to.be.a('string');//aserciones 
                done();
            });
    });
});
describe('Obtiene empleados: ', () => {
    it('Deberia obtener todos los empleados', (done) => {
        chai.request(url)
            .get('/Empleado')
            .set('Accept', 'application/json')
            .send()
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
});
