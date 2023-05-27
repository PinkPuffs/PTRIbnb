"use strict";
exports.__esModule = true;
var path = require("path");
var express = require("express");
var express_graphql_1 = require("express-graphql");
var graphql_1 = require("graphql");
var env = require("dotenv");
var cors = require("cors");
var cookieParser = require("cookie-parser");
// import * as routes from './routes/api';
var schema = (0, graphql_1.buildSchema)("\ntype Query {\n  rollDice(numDice: Int!, numSides: Int): [Int]\n}\n");
var root = {
    rollDice: function (_a) {
        var numDice = _a.numDice, numSides = _a.numSides;
        var output = [];
        for (var i = 0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (numSides || 6)));
        }
        return output;
    }
};
env.config();
// Create a new Express app
var app = express();
var PORT = 3000;
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
// Routes
app.get('/', function (req, res) {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
app.use(function (req, res) {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
app.use(function (err, req, res, next) {
    var defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { error: 'An error occured' }
    };
    var errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
app.listen(PORT, function () {
    console.log("Server is listening at http://localhost:".concat(PORT, "/ \u2705"));
});
exports["default"] = app;
