

var fs = require('fs');
    var buf = new Buffer(24);
fs.readFile("./index.html",'utf-8', function(err, data){
        if (err) throw err;
        buf = new Buffer(data.toString());
        
});
console.log(buf.toString('utf-8'));