const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/apiRestFul', { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true })
    .then(console.log('conectou')
    ).catch()
mongoose.Promise = global.Promise

module.exports = mongoose