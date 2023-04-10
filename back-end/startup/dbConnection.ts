const fs = require('fs');
const mysql = require('mysql');

const serverCa = [fs.readFileSync("/var/www/html/bin/DigiCertGlobalRootCA.crt.pem", "utf8")];

const connection = mysql.createConnection({

  connectionLimit : process.env.DB_CONLIMIT,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER ,
  password        : process.env.DB_PASSWORD ,
  database        : process.env.DB_DATABASE,
  port:3306,
  ssl:{
    rejectUnauthorised: true,
    ca: serverCa
  }

});

connection.connect(function(err:any) {
	if (err) throw err
});

export default connection;