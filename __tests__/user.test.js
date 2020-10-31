const request = require('supertest');
const app = require('../src/app');

 // eslint-disable-next-line no-undef
 describe('validar funções do usuario', () => {
     // eslint-disable-next-line no-undef
     it('Deve criar um usuario', async () => {
 console.log("ggg")
 const body = {
    "nome":"Gio11", 
    "email":`gileite${Math.random()*10}@gmail.com`,
    "senha":"12345",
    "telefones":[{"ddd":11,"numero":123123}]
    }
        const response = await request(app)
            .post('/createUser')
            .send(body)
            console.log(response.body)
          const bodyResponse = response.body  
        // eslint-disable-next-line no-undef
        expect(response.status).toBe(201)
        expect(bodyResponse.createUser.nome).toBe(body.nome)
        expect(bodyResponse.createUser.email).toBe(body.email)
        expect(bodyResponse.createUser).toHaveProperty('telefones')
     });
 })