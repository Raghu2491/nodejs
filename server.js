//dependencies:
var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');

//connect to mongoDB:
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ArJay:root@ds145997.mlab.com:45997/myfbdb');

//express:
var app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes:
app.use('/api',require('./api'));

//start server:
app.listen(1000);
console.log("Server is running on port 1000");