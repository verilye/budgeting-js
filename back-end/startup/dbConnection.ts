const mysql = require('mysql');



module.exports = function(){

  const connection = mysql.createConnection({

    host:'',
    user:'',
    password:'',
    database: ''

  });

  connection.connect();
  
}

