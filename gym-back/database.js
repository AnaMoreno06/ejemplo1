const mysql = require('mysql');

const pool = mysql.createPool({
    host: "us-cdbr-east-06.cleardb.net", //"localhost"
    user: "bd856984ac68d0", // "root"
    password: "6bd290d5", // "root"
    database: "heroku_315f55574d5548c" // "gym"
});
  
pool.getConnection( function(err, connection) {
  if (err) {
      console.log('Ocurrio un error : ' + err);
      throw err;    
  }
  console.log('Database cennected');
  connection.release();
});

module.exports = pool;