const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();


var indexRouter= require('./routes/index');
/*
var searchResultsRouter= require('./routes/searchResults');
var adminEngineRouter= require('./routes/adminEngine');
*/
var adminStatsRouter= require('./routes/adminStats');
var apiRouter= require('./routes/api');

var serRouter=require('./routes/searchEngineResults');
var aerRouter=require('./routes/adminEngineResults');
var seMainRouter=require('./routes/searchEngineMain');
var aeMainRouter=require('./routes/adminEngineMain');


//app.set('port', process.env.port || port); // set express to use this port
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload


app.use('/',indexRouter);
/*
app.use('/searchResults',searchResultsRouter);
app.use('/adminEngine',adminEngineRouter);
*/
app.use('/adminStats', adminStatsRouter);
app.use('/api', apiRouter);

app.use('/searchEngineResults',serRouter);
app.use('/adminEngineResults',aerRouter);
app.use('/searchEngineMain',seMainRouter);
app.use('/adminEngineMain',aeMainRouter);



/*
// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
*/

module.exports = app;