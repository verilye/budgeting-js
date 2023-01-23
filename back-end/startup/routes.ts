const express = require('express');
const login = require('../routes/login');

module.exports = function(app:any){ 

    app.use(express.json());
    app.use("/", login);

}