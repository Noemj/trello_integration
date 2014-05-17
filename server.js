var express = require('express');
var http = require('http');
var bodyParser = require('body-parser')
var request = require('request');
var config = require('./config.json')
var app = express();

app.use(bodyParser());

var list = String(process.env.LIST || config.list);
var key = String(process.env.KEY || config.key);
var token = String(process.env.TOKEN || config.token); 

function callback(error, response, body){
  if (error){
    console.log(error);
  }
}

app.post('/issue', function(req, resp){
  if (req.body.action == "opened") {
    var options = {
      url: 'https://api.trello.com/1/lists/' + list + '/cards?key=' + key + '&token=' + token + '',
      method: 'POST',
      body: '{"name": "'+ req.body.issue.title + '", "desc": "' + req.body.issue.html_url + '\\n' + req.body.issue.body + '"}',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    request(options, callback);
    resp.send(200);
  }
})

var port = Number(process.env.PORT || 8080);
http.createServer(app).listen(port);
