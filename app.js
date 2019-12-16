var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '149.4.211.180',
  user     : 'crjo0143',
  password : '12000143',
  database : 'crjo0143'
});
 
connection.connect();
 var sqlQuery= 'SHOW tables'
connection.query(sqlQuery, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', fields);
});
 
connection.end();