"use strict";
exports.__esModule = true;
var express_1 = require("express");
var application = (0, express_1["default"])();
var port = 3000;
application
    .get('/', function (req, res) {
    res.send({
        message: 'Hello, World!'
    });
})
    .get('/random', function (req, res) {
    res.send({
        number: Math.floor(Math.random() * 100)
    });
});
application.listen(port, function () {
    console.log("Application listening on port ".concat(port));
});
