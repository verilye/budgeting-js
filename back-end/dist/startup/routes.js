"use strict";
const express = require('express');
const userAccess = require('../routes/user-access');
module.exports = function (app) {
    app.use(express.json());
    app.use("/user-access", userAccess);
};
