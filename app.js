const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

//const {getHomePage} = require('./routes/index');
var indexRouter= require('./routes/index');
var searchResultsRouter= require('./routes/searchResults');
var adminEngineRouter= require('./routes/adminEngine');
var adminStatsRouter= require('./routes/adminStats')
//const port = 5000;
//console.log('ff');
const db = mysql.createConnection({
  host     : '149.4.211.180',
  user     : 'crjo0143',
  password : '12000143',
  database : 'crjo0143'
});
 
// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

//app.set('port', process.env.port || port); // set express to use this port
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload


app.use('/',indexRouter);
app.use('/searchResults',searchResultsRouter);
app.use('/adminEngine',adminEngineRouter);
app.use('/adminStats', adminStatsRouter);



/*
// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
*/

module.exports = app;