var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buf = new Buffer(16);
    fs.readFile("index.html",'utf-8', function(err, data){

	if (err) throw err;
	
	fs.write(data, 'utf-8');
})
    response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
