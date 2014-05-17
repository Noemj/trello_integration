var express = require('express');
var http = require('http');
var logger = require('morgan');
var bodyParser = require('body-parser')

var app = express();

app.use(logger('short'));
app.use(bodyParser());

app.post('/issue', function(req, resp){
	resp.send('GitHub issue and Trello integration');
})

var port = Number(process.env.PORT || 8080);
http.createServer(app).listen(port);
