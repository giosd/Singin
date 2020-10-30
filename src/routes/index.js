const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.get('/', function(req, res) {
    res.send('Server On');
  });

  router.post('/createUser', userController.create)

  /**
* @api {post} router.post('/createUser', userController.create) Criar um usuario
* @apiDescription cria um usuario para acessar os nossos serviços
*
* @apiExample Example body request:

{
"nome":"Gio08", 
"email":"gileite179967@gmail.com",
"senha":"12345",
"telefones":[{"ddd":11,"numero":123123}]
}
*
*
*
* @apiGroup Usuários
 @apiParam (request body) {String} nome nome do usuário.
 @apiParam (request body) {String} email email do usuário. 
 @apiParam (request body) {String} senha senha do usuário.
* @apiSuccessExample {json} Success-Response:
{
  "userRes": {
    "ultimo_login": "2020-10-30T03:31:24.791Z",
    "createdAt": "2020-10-30T03:10:48.248Z",
    "updatedAt": "2020-10-30T03:10:48.248Z",
    "_id": "5f9b853f5fa48f385c42ea33",
    "nome": "Gio11",
    "email": "gileite1799679@gmail.com",
    "telefones": [
      {
        "_id": "5f9b853f5fa48f385c42ea34",
        "ddd": 11,
        "numero": 123123
      }
    ],
    "API_TOKEN": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTFjNDliNjY1OThjMDJmNDRkZWRhZiIsImlhdCI6MTU5OTE5NDI2NywiZXhwIjoxNTk5MjgwNjY3fQ.4ZPjMfjW6vTyQVXk9abZZGX2sFa5LeJlLRE2ccOFGtQ",
    "__v": 0
  }
}
 * @apiSuccess               {string}                     _id           id gerado pelo banco mongoDB
 * @apiSuccess               {string}                     nome                           nome do usuário
 * @apiSuccess               {string}                     email                  email do usuário
 * @apiSuccess               {string}                senha                         senha criptografada
 * @apiSuccess               {array}                telefones                         lista de produtos favoritados
 * @apiSuccess               {date}                createdAt                         data de inclusão do registro
 * @apiSuccess               {date}                updatedAt                         data da ultima alteração do registro
 * @apiSuccess               {string}                token                         token para autenticação
 * @apiSuccess               {date}                ultimo_Login                         data do ultimo login
 *
 *
 * @apiErrorExample {json} Error-Response:
  {
  "driver": true,
  "name": "MongoError",
  "index": 0,
  "code": 11000,
  "keyPattern": {
    "email": 1
  },
  "keyValue": {
    "id": "gileite1766@gmail.com"
  }
}
 
*/


router.post('/auth', userController.auth)

  
/**
* @api {post} http://localhost:3000/auth Autenticação de um usuario
* @apiDescription autenticação de um usuario para acessar os nossos serviços
*
* @apiExample Example body request:
{
  "email":"gio2@teste.com",
  "password":"12345"
}
*
*
*
* @apiGroup Usuários
 @apiParam (request body) {String} email email do usuário. 
 @apiParam (request body) {String} senha senha do usuário.
* @apiSuccessExample {json} Success-Response:
{
  "userRes": {
    "ultimo_login": "2020-10-30T03:31:24.791Z",
    "createdAt": "2020-10-30T03:10:48.248Z",
    "updatedAt": "2020-10-30T03:10:48.248Z",
    "_id": "5f9b853f5fa48f385c42ea33",
    "nome": "Gio11",
    "email": "gileite1799679@gmail.com",
    "telefones": [
      {
        "_id": "5f9b853f5fa48f385c42ea34",
        "ddd": 11,
        "numero": 123123
      }
    ],
    "API_TOKEN": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTFjNDliNjY1OThjMDJmNDRkZWRhZiIsImlhdCI6MTU5OTE5NDI2NywiZXhwIjoxNTk5MjgwNjY3fQ.4ZPjMfjW6vTyQVXk9abZZGX2sFa5LeJlLRE2ccOFGtQ",
    "__v": 0
  }
}
 * @apiSuccess               {string}                     _id           id gerado pelo banco mongoDB
 * @apiSuccess               {string}                     nome                           nome do usuário
 * @apiSuccess               {string}                     email                  email do usuário
 * @apiSuccess               {string}                senha                         senha criptografada
 * @apiSuccess               {array}                telefones                         lista de produtos favoritados
 * @apiSuccess               {date}                createdAt                         data de inclusão do registro
 * @apiSuccess               {date}                updatedAt                         data da ultima alteração do registro
 * @apiSuccess               {string}                token                         token para autenticação
 * @apiSuccess               {date}                ultimo_Login                         data do ultimo login
 *
 * @apiErrorExample {json} Error-Response:Password
  {
  "mensagem": "Usuário e/ou senha inválidos"
}
 
*/


router.get('/user/:id', userController.busca)




module.exports = router