

var fs = require('fs');
 var buf = new Buffer(100);
fs.readFile("./index.html",'utf-8', function(err, data){
        if (err) throw err;
        console.log(data);
        buf = new Buffer(data.toString());
        buf.write(data.toString(),"utf-8");
        console.log(buf.toString('utf-8'));
});
