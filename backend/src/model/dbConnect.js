"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var PG_URI = process.env.PG_URI;
var pool = new pg_1.Pool({
    connectionString: PG_URI
});
pool.on('error', function (err) {
    console.error('Unexpected error on idle client', err);
});
exports.default = pool;
