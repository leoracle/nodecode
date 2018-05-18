// My microservice!ERERERER
var express = require('express');
var request = require('request');
var mysql = require('mysql');
var connection = connectToDatabase('myHost', 'myUser', 'myPassword', 'myDatabase');

var app = express();

app.use(express.static('public'));
console.log('Exact name: ' + process.env.ORA_INSTANCE_NAME);

//sample URL.
var urlPart1= "http://129.157.179.180:3000/fighters/45/y";
var urlPart3="/blue/leoracle";
var i;
for (i = 0; i <9; i++) { 
  
    runGetRequest(urlPart1.concat(i,urlPart3));
}

//runDatabaseQuery();

// Does a GET request to ip.jsontest.com
function runGetRequest(url) {
    

   
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

//Executes a SQL query
function runDatabaseQuery() {
    connection.query("SELECT * FROM SampleTable", function(error, rows, fields) {
        if(!error) {
            console.log(rows);
        } else {
            console.log(error);
        }
    });
};

// Returns a connection object to the database.
function connectToDatabase(host, user, password, database) {
    var connectionJson = {
        host: host,
        user: user,
        password: password,
        database: database,
        timezone: 'utc'
    };
    return mysql.createConnection(connectionJson);
};

module.exports = app;
