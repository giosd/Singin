define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/apidoc/main.js",
    "group": "C:\\Users\\Gio\\Documents\\Singin\\src\\apidoc\\main.js",
    "groupTitle": "C:\\Users\\Gio\\Documents\\Singin\\src\\apidoc\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "http://localhost:3000/auth",
    "title": "Autenticação de um usuario",
    "description": "<p>autenticação de um usuario para acessar os nossos serviços</p>",
    "examples": [
      {
        "title": "Example body request:",
        "content": "{\n  \"email\":\"gio2@teste.com\",\n  \"password\":\"12345\"\n}",
        "type": "json"
      }
    ],
    "group": "Usuários",
    "parameter": {
      "fields": {
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email do usuário.</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>senha do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"userRes\": {\n    \"ultimo_login\": \"2020-10-30T03:31:24.791Z\",\n    \"createdAt\": \"2020-10-30T03:10:48.248Z\",\n    \"updatedAt\": \"2020-10-30T03:10:48.248Z\",\n    \"_id\": \"5f9b853f5fa48f385c42ea33\",\n    \"nome\": \"Gio11\",\n    \"email\": \"gileite1799679@gmail.com\",\n    \"telefones\": [\n      {\n        \"_id\": \"5f9b853f5fa48f385c42ea34\",\n        \"ddd\": 11,\n        \"numero\": 123123\n      }\n    ],\n    \"API_TOKEN\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTFjNDliNjY1OThjMDJmNDRkZWRhZiIsImlhdCI6MTU5OTE5NDI2NywiZXhwIjoxNTk5MjgwNjY3fQ.4ZPjMfjW6vTyQVXk9abZZGX2sFa5LeJlLRE2ccOFGtQ\",\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>id gerado pelo banco mongoDB</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nome",
            "description": "<p>nome do usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email do usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "senha",
            "description": "<p>senha criptografada</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "telefones",
            "description": "<p>lista de produtos favoritados</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>data de inclusão do registro</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>data da ultima alteração do registro</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token para autenticação</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "ultimo_Login",
            "description": "<p>data do ultimo login</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:Password",
          "content": "  {\n  \"mensagem\": \"Usuário e/ou senha inválidos\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Usuários",
    "name": "PostHttpLocalhost3000Auth"
  },
  {
    "type": "post",
    "url": "router.post('/createUser',userController.create)",
    "title": "Criar um usuario",
    "description": "<p>cria um usuario para acessar os nossos serviços</p>",
    "examples": [
      {
        "title": "Example body request:",
        "content": "\n{\n\"nome\":\"Gio08\", \n\"email\":\"gileite179967@gmail.com\",\n\"senha\":\"12345\",\n\"telefones\":[{\"ddd\":11,\"numero\":123123}]\n}",
        "type": "json"
      }
    ],
    "group": "Usuários",
    "parameter": {
      "fields": {
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>nome do usuário.</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email do usuário.</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>senha do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"userRes\": {\n    \"ultimo_login\": \"2020-10-30T03:31:24.791Z\",\n    \"createdAt\": \"2020-10-30T03:10:48.248Z\",\n    \"updatedAt\": \"2020-10-30T03:10:48.248Z\",\n    \"_id\": \"5f9b853f5fa48f385c42ea33\",\n    \"nome\": \"Gio11\",\n    \"email\": \"gileite1799679@gmail.com\",\n    \"telefones\": [\n      {\n        \"_id\": \"5f9b853f5fa48f385c42ea34\",\n        \"ddd\": 11,\n        \"numero\": 123123\n      }\n    ],\n    \"API_TOKEN\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTFjNDliNjY1OThjMDJmNDRkZWRhZiIsImlhdCI6MTU5OTE5NDI2NywiZXhwIjoxNTk5MjgwNjY3fQ.4ZPjMfjW6vTyQVXk9abZZGX2sFa5LeJlLRE2ccOFGtQ\",\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>id gerado pelo banco mongoDB</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nome",
            "description": "<p>nome do usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email do usuário</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "senha",
            "description": "<p>senha criptografada</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "telefones",
            "description": "<p>lista de produtos favoritados</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>data de inclusão do registro</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>data da ultima alteração do registro</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token para autenticação</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "ultimo_Login",
            "description": "<p>data do ultimo login</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  {\n  \"driver\": true,\n  \"name\": \"MongoError\",\n  \"index\": 0,\n  \"code\": 11000,\n  \"keyPattern\": {\n    \"email\": 1\n  },\n  \"keyValue\": {\n    \"id\": \"gileite1766@gmail.com\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Usuários",
    "name": "PostRouterPostCreateuserUsercontrollerCreate"
  }
] });
