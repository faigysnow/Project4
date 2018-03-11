
app.use(express.static('./app/client'));
app.use('/node_modules', express.static('./app/node_modules'));
app.use(favicon(path.join(__dirname, '../client/images/favicon.ico')));
// app.use(express.static(path.join(__dirname, './app/node_modules')));
app.use('/client', express.static(path.join(__dirname, './app/client')));
// app.use('/client', express.static('./client'));



var express = require('express'),
app = express(),
mongoose = require('mongoose'),
path = require('path'),
bodyParser = require('body-parser'),
port = 3001,
favicon = require('serve-favicon'),//find out what it is
login = require('./api/loginApi'),//add all api
session = require('express-session');
//Member = require('./model');// add all models??

var db = 'mongodb://127.0.0.1/projectShopping';
mongoose.connect(db, { useMongoClient: true });
var con = mongoose.connection;

con.on('error', console.error.bind(console, 'connection error:'));

con.once('open', function () {
console.log("connection created");
});


app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({extended:false})); 


app.listen(port, function () {
console.log(`App listening on port ${port}`);
})
app.use(login);