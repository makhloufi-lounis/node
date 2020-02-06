
var express = require('express');
var util = require('util');
var app = express();
app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.end(util.format("%s -%s\n", new Date(), 'GOT Request'));
});
app.listen(process.env.PORT || 8080);
