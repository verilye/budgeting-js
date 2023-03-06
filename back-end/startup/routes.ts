const express = require('express');
const user_access = require('../routes/user-access');
const transaction = require('../routes/transactions');

module.exports = function(app:any){ 

    app.use(express.json());
    app.use("/user-access", user_access);
    app.use("/transaction",transaction )

}