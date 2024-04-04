const http = require('http');

http.createServer(function(req,res){
res.write("Hello this is from Azure VIrtual Machine");
res.end();

}).listen(3000);
console.log("Server Started");
