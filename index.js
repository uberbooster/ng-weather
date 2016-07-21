var express = require('express');
var cors = require('cors');
var server = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());
server.use(express.static(__dirname + '/public'));


server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root: __dirname});
});

server.listen(port, function(){
  console.log('Now listening on port...' + port);
});
