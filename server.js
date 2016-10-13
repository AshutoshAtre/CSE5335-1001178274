var express = require('express');
var fs = require('fs');
var app = express(); 						
var port = process.env.PORT || 8081; 				
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


app.use(express.static('./public')); 		
app.use(bodyParser.urlencoded({'extended': 'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 
app.use(methodOverride('X-HTTP-Method-Override'));

// routes
//require('./routes.js')(app);

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/index.html'); 
});

app.get('/getLocations', function (req, res) {
   fs.readFile( __dirname + "/public/data/" + "locations.json", 'utf8', function (err, data) {
      console.log( data ); 
      res.end( data );
   });
});

app.listen(port);
console.log("App listening on port " + port);