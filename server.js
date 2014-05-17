var express = require('express');
var http = require('http');
var logger = require('morgan');
var bodyParser = require('body-parser')
var request = require('request');
var app = express();

app.use(logger('short'));
app.use(bodyParser());


function callback(error, response, body){
	if (error){
		console.log(error);
	}
}

app.post('/issue', function(req, resp){
	if (req.body.action == "opened") {
		console.log("opened");
		var options = {
			url: "https://api.trello.com/1/lists/" + process.env.LIST + "/cards?key=" + process.env.KEY + "&token=" + process.env.TOKEN + "",
			method: "POST",
			body: '{"name": "'+ req.body.issue.title + '", "desc": "' + req.body.issue.body + '"}',
			headers: {
				'Content-Type': 'application/json'
			}
		};
		request(options, callback);
	}
})

var port = Number(process.env.PORT || 8080);
http.createServer(app).listen(port);
