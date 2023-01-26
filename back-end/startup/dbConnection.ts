import { connect } from "http2";

const mysql = require('mysql');

const connection = mysql.createConnection({

  connectionLimit : process.env.DB_CONLIMIT,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER ,
  password        : process.env.DB_PASSWORD ,
  database        : process.env.DB_DATABASE

});

export default connection;