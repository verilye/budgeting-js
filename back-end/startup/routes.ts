const express = require('express');
const user_access = require('../routes/user-access');
const budgeting = require('../routes/budgeting');


module.exports = function(app:any){ 

    app.use(express.json());
    app.use("/user-access", user_access);
    app.use("/budgeting", budgeting );

}