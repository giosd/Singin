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
    "group": "C:\\Users\\Gio\\Documents\\DesafioSpotify\\src\\apidoc\\main.js",
    "groupTitle": "C:\\Users\\Gio\\Documents\\DesafioSpotify\\src\\apidoc\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "http://localhost:3000/listProduct",
    "title": "Lista produtos favoritos",
    "description": "<p>lista favoritos do user</p>",
    "examples": [
      {
        "title": "Example body request:",
        "content": "\n{\n  \"_id\":\"5f51803078f09737947bf97f\"\n}",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>token para autenticação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\": \"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTFjNDliNjY1OThjMDJmNDRkZWRhZiIsImlhdCI6MTU5OTE5NDI2NywiZXhwIjoxNTk5MjgwNjY3fQ.4ZPjMfjW6vTyQVXk9abZZGX2sFa5LeJlLRE2ccOFGtQ\"",
          "type": "json"
        }
      ]
    },
    "group": "Favoritos",
    "parameter": {
      "fields": {
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"id\": \"1\"\n  },\n  {\n    \"id\": \"1\"\n  },\n  {\n    \"id\": \"1\"\n  },\n  {\n    \"id\": \"Washington DC\"\n  },\n  {\n    \"id\": \"Washington DC\"\n  },\n  {\n    \"id\": \"Washington DC1\"\n  }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseText",
            "description": "<p>produto desfavoritado e email enviado com a lista de favoritos</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  {\n  \"error\": \"Produto não Favoritado\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:token",
          "content": "{\n  \"error\": \"token malformatted\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:id",
          "content": "User não encontrado",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Favoritos",
    "name": "GetHttpLocalhost3000Listproduct"
  },
  {
    "type": "put",
    "url": "http://localhost:3000/addFav",
    "title": "Adiciona produtos na lista de favoritos",
    "description": "<p>adiciona os produtos na lista de favoritos do user</p>",
    "examples": [
      {
        "title": "Example body request:",
        "content": "\n{\n  \"_id\":\"5f51c49b66598c02f44dedaf\",\n  \"idProd\":\"Washington DC1\"\n}",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>token para autenticação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\": \"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTFjNDliNjY1OThjMDJmNDRkZWRhZiIsImlhdCI6MTU5OTE5NDI2NywiZXhwIjoxNTk5MjgwNjY3fQ.4ZPjMfjW6vTyQVXk9abZZGX2sFa5LeJlLRE2ccOFGtQ\"",
          "type": "json"
        }
      ]
    },
    "group": "Favoritos",
    "parameter": {
      "fields": {
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id do usuário.</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "idProd",
            "description": "<p>id do produto a ser favoritado.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"responseText\": \"Message send!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseText",
            "description": "<p>produto favoritado e email enviado com a lista de favoritos</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  {\n  \"error\": \"Produto ja Favoritado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Favoritos",
    "name": "PutHttpLocalhost3000Addfav"
  },
  {
    "type": "put",
    "url": "http://localhost:3000/removeFav",
    "title": "Remove produtos na lista de favoritos",
    "description": "<p>remove os produtos na lista de favoritos do user</p>",
    "examples": [
      {
        "title": "Example body request:",
        "content": "\n{\n  \"_id\":\"5f51c49b66598c02f44dedaf\",\n  \"idProd\":\"Washington DC1\"\n}",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>token para autenticação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\": \"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTFjNDliNjY1OThjMDJmNDRkZWRhZiIsImlhdCI6MTU5OTE5NDI2NywiZXhwIjoxNTk5MjgwNjY3fQ.4ZPjMfjW6vTyQVXk9abZZGX2sFa5LeJlLRE2ccOFGtQ\"",
          "type": "json"
        }
      ]
    },
    "group": "Favoritos",
    "parameter": {
      "fields": {
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id do usuário.</p>"
          },
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "idProd",
            "description": "<p>id do produto a ser desfavoritado.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"responseText\": \"Message send!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseText",
            "description": "<p>produto desfavoritado e email enviado com a lista de favoritos</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  {\n  \"error\": \"Produto não Favoritado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Favoritos",
    "name": "PutHttpLocalhost3000Removefav"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/auth",
    "title": "Autenticação de um usuario",
    "description": "<p>autenticação de um usuario para acessar os nossos serviços</p>",
    "examples": [
      {
        "title": "Example body request:",
        "content": "\n{\n  \"email\":\"gio2@teste.com\",\n  \"password\":\"12345\"\n}",
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
            "field": "password",
            "description": "<p>senha do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"authCustomer\": {\n    \"_id\": \"5f50319d17dbb50d1ca50784\"\n  },\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTAzMTlkMTdkYmI1MGQxY2E1MDc4NCIsImlhdCI6MTU5OTI0MzY1MywiZXhwIjoxNTk5MzMwMDUzfQ.qW5cNE0vIwI1tS1HviEjESJlJT_ctC2qFOfEJDXv93U\"\n}",
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
            "description": "<p>id do usuario gerado pelo banco mongoDB</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token para autenticação</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:Password",
          "content": "  {\n  \"error\": \"Invalid Password\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:User",
          "content": "  {\n  \"error\": \"User not found\"\n}",
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
    "url": "http://localhost:3000/createCustomer",
    "title": "Criar um usuario",
    "description": "<p>cria um usuario para acessar os nossos serviços</p>",
    "examples": [
      {
        "title": "Example body request:",
        "content": "\n{\n  \"name\":\"Gio8\",\n  \"email\":\"gileite176@gmail.com\",\n  \"password\":\"12345\"\n}",
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
            "field": "name",
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
            "field": "password",
            "description": "<p>senha do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"createCustomer\": {\n    \"_id\": \"5f52804ccd5f6f04c8d37232\",\n    \"name\": \"Gio8\",\n    \"email\": \"gi66@gmail.com\",\n    \"password\": \"$2a$10$xhJ11dHAS8k1GP.XmNA5welq8WLvNpM/0EyzoKivqkcpHo4PRB7pW\",\n    \"productsFav\": [],\n    \"createdAt\": \"2020-09-04T17:58:36.097Z\",\n    \"updatedAt\": \"2020-09-04T17:58:36.097Z\",\n    \"__v\": 0\n  },\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTI4MDRjY2Q1ZjZmMDRjOGQzNzIzMiIsImlhdCI6MTU5OTI0MjMxNiwiZXhwIjoxNTk5MzI4NzE2fQ.NG8DfTQhiXZ3biRsyd_4rKaq1NINaisyPYmlP8J79P8\"\n}",
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
            "field": "name",
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
            "field": "password",
            "description": "<p>senha criptografada</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productsFav",
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
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  {\n  \"driver\": true,\n  \"name\": \"MongoError\",\n  \"index\": 0,\n  \"code\": 11000,\n  \"keyPattern\": {\n    \"email\": 1\n  },\n  \"keyValue\": {\n    \"email\": \"gileite1766@gmail.com\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Usuários",
    "name": "PostHttpLocalhost3000Createcustomer"
  }
] });
