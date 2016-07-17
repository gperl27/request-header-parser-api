var express = require('express');
var app = express();
var ip = require('ip');

var port = process.env.Port || 8080;

//ip.address();

app.get('/', function(req,res){
    var language = req.headers["accept-language"].split(',');
    var os = req.headers['user-agent'].split(') ')[0].split(' (')[1];
    res.json({
      //'IP': ip.address(),
      'Language' : language[0],
      'OS' : os
    });

});

app.listen(port, function(){
  console.log('Listening on port ' + port);
});