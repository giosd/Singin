const app = require('./app');
const express = require('express')
app.use('/doc', express.static('src/apidoc'))
// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () => { console.log(`Server is running on port: ${process.env.PORT}`) })